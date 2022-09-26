package com.scaleup.authentication.service;

import com.scaleup.authentication.dto.BoardRequest;
import com.scaleup.authentication.dto.BoardResponse;
import com.scaleup.authentication.entity.Board;
import com.scaleup.authentication.entity.User;
import com.scaleup.authentication.repository.BoardRepository;
import com.scaleup.authentication.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;
import java.time.LocalDateTime;

import java.util.*;

@RequiredArgsConstructor
@Service
public class BoardServiceImpl implements BoardService {
    private final BoardRepository boardRepository;
    private final UserRepository userRepository;

    @Transactional
    @Override
    public BoardResponse getPost(Long boardNo) {
        Board board = boardRepository.findById(boardNo).orElseThrow(EntityNotFoundException::new);
        board.updateViews(board.getViews() + 1);

        return BoardResponse.builder()
                .no(board.getNo())
                .writer(board.getWriter())
                .title(board.getTitle())
                .content(board.getContent())
                .views(board.getViews())
                .category(board.getCategory())
                .createDate(board.getCreateDate()).build();
    }

    @Override
    public List<BoardResponse> getAllPost() {
        List<Board> list = boardRepository.findAll();
        List<BoardResponse> boards = new ArrayList<>();
        for (Board board : list) {
            boards.add(BoardResponse.builder()
                    .no(board.getNo())
                    .writer(board.getWriter())
                    .title(board.getTitle())
                    .content(board.getContent())
                    .views(board.getViews())
                    .category(board.getCategory())
                    .createDate(board.getCreateDate()).build());
        }
        return boards;
    }

    /**
     * List<Class> 를 Page 로 Return 받는 방법
     * PageImple은 Page를 복사? 한 느낌 ?
     */
    @Override
    public PageImpl<BoardResponse> findPostByTitle(String title, Pageable pageable) {
        List<Board> boardByTitle = boardRepository.findBoardByTitle(title, pageable);
        List<BoardResponse> boardResponses = new ArrayList<>();
        for (Board board : boardByTitle) {
            boardResponses.add(BoardResponse.builder()
                    .no(board.getNo())
                    .writer(board.getWriter())
                    .title(board.getTitle())
                    .content(board.getContent())
                    .views(board.getViews())
                    .category(board.getCategory())
                    .createDate(board.getCreateDate()).build());
        }
        PageImpl<BoardResponse> boardResponses1 = new PageImpl<>(boardResponses);
        return boardResponses1;
    }

    @Override
    public List<BoardResponse> findPostByWriter(String writer) {
        List<Board> boardByWriter = boardRepository.findBoardByWriter(writer);
        List<BoardResponse> boardResponses = new ArrayList<>();
        for (Board board : boardByWriter) {
            boardResponses.add(BoardResponse.builder()
                    .no(board.getNo())
                    .writer(board.getWriter())
                    .title(board.getTitle())
                    .content(board.getContent())
                    .views(board.getViews())
                    .category(board.getCategory())
                    .createDate(board.getCreateDate()).build());
        }
        return boardResponses;
    }

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
                .category(boardRequest.getCategory())
                .build());

        return BoardResponse.builder()
                .no(board.getNo())
                .writer(board.getWriter())
                .title(board.getTitle())
                .content(board.getContent())
                .views(board.getViews())
                .category(board.getCategory())
                .createDate(board.getCreateDate()).build();
    }

    @Override
    public BoardResponse post2(BoardRequest boardRequest) {
        Board board = boardRepository.save(Board.builder()
                .userNo(1L)
                .writer("허수빈")
                .title(boardRequest.getTitle())
                .content(boardRequest.getContent())
                .createDate(LocalDateTime.now())
                .views(0)
                .category(boardRequest.getCategory())
                .build());

        return BoardResponse.builder()
                .no(board.getNo())
                .writer(board.getWriter())
                .title(board.getTitle())
                .content(board.getContent())
                .views(board.getViews())
                .category(board.getCategory())
                .createDate(board.getCreateDate()).build();
    }

    @Override
    public BoardResponse getPostForEdit(Long boardNo) {
        Board board = boardRepository.findById(boardNo).orElseThrow(EntityNotFoundException::new);

        return BoardResponse.builder()
                .no(board.getNo())
                .writer(board.getWriter())
                .title(board.getTitle())
                .content(board.getContent())
                .views(board.getViews())
                .category(board.getCategory())
                .createDate(board.getCreateDate()).build();
    }

    @Transactional
    @Override
    public BoardResponse updatePost(Long boardNo, BoardRequest boardRequest) {
        Board board = boardRepository.findById(boardNo).orElseThrow(EntityNotFoundException::new);

        board.updateBoard(boardRequest.getTitle(), boardRequest.getContent(), boardRequest.getCategory(),
                LocalDateTime.now());

        return BoardResponse.builder()
                .no(board.getNo())
                .writer(board.getWriter())
                .title(board.getTitle())
                .content(board.getContent())
                .views(board.getViews())
                .category(board.getCategory())
                .createDate(board.getCreateDate()).build();
    }

    @Transactional
    @Override
    public boolean deletePost(Long boardNo) {
        if (boardRepository.existsById(boardNo)) {
            boardRepository.deleteById(boardNo);
            return true;
        } else
            return false;
    }

    @Override
    public Page<BoardResponse> getList(Pageable pageable) {
        Page<Board> post = boardRepository.findAll(pageable);
        Page<BoardResponse> paging = post.map(p -> new BoardResponse(
                p.getNo(), p.getWriter(), p.getTitle(), p.getContent(),
                p.getViews(), p.getCategory(), p.getCreateDate(), p.getUpdateDate()
        ));
        return paging;
    }
}
