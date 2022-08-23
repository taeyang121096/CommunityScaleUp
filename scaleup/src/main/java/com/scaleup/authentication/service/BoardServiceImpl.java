package com.scaleup.authentication.service;

import com.scaleup.authentication.dto.BoardRequest;
import com.scaleup.authentication.dto.BoardResponse;
import com.scaleup.authentication.entity.Board;
import com.scaleup.authentication.entity.User;
import com.scaleup.authentication.repository.BoardRepository;
import com.scaleup.authentication.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.*;

@RequiredArgsConstructor
@Service
public class BoardServiceImpl implements BoardService {
    private final BoardRepository boardRepository;
    private final UserRepository userRepository;

    @Override
    public BoardResponse post(Long userNo, BoardRequest boardRequest) {
        User user = userRepository.findById(userNo).orElseThrow(EntityNotFoundException::new);
        Board board = boardRepository.save(Board.builder()
                .userNo(user.getNo())
                .writer(user.getName())
                .title(boardRequest.getTitle())
                .content(boardRequest.getContent())
                .createDate(LocalDateTime.now())
                .views(0)
                .build());

        return BoardResponse.builder()
                .writer(board.getWriter())
                .title(board.getTitle())
                .content(board.getContent())
                .createDate(board.getCreateDate()).build();
    }

    @Override
    public BoardResponse getPost(Long boardNo) {
        Board board = boardRepository.findById(boardNo).orElseThrow(EntityNotFoundException::new);

        return BoardResponse.builder()
                .writer(board.getWriter())
                .title(board.getTitle())
                .content(board.getContent())
                .createDate(board.getCreateDate())
                .views(board.getViews())
                .build();
    }

    @Transactional
    @Override
    public BoardResponse updatePost(Long boardNo, BoardRequest boardRequest) {
        Board board = boardRepository.findById(boardNo).orElseThrow(EntityNotFoundException::new);

        board.updateBoard(boardRequest.getTitle(), boardRequest.getContent(), LocalDateTime.now());

        return BoardResponse.builder()
                .writer(board.getWriter())
                .title(board.getTitle())
                .content(board.getContent())
                .updateDate(board.getCreateDate()).build();
    }

    @Transactional
    @Override
    public boolean deletePost(Long boardNo) {
        if(boardRepository.existsById(boardNo)){
            boardRepository.deleteById(boardNo);
            return true;
        } else
            return false;
    }

//    @Override
//    public Page<Board> getList(int page) {
//        List<Sort.Order> sorts = new ArrayList<>();
//        sorts.add(Sort.Order.desc("createTime"));
//        PageRequest pageable = PageRequest.of(page, 5, Sort.by(sorts));
//
//        return this.boardRepository.findAll(pageable);
//    }
    // Request 가 오면

}
