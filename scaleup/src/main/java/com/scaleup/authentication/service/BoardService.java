package com.scaleup.authentication.service;

import com.scaleup.authentication.dto.BoardRequest;
import com.scaleup.authentication.dto.BoardResponse;
import com.scaleup.authentication.entity.Board;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.*;

@Service
public interface BoardService {
    BoardResponse post(Long userNo, BoardRequest boardRequest);

    BoardResponse getPostForEdit(Long boardNo);

    BoardResponse updatePost(Long boardNo, BoardRequest boardRequest);

    boolean deletePost(Long boardNo);

    BoardResponse getPost(Long boardNo);

    List<BoardResponse> getAllPost();

    List<BoardResponse> findPostByTitle(String title);

    List<BoardResponse> findPostByWriter(String writer);

//    Page<Board> getList(int page);
}
