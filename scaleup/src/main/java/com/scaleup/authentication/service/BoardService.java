package com.scaleup.authentication.service;

import com.scaleup.authentication.dto.BoardRequest;
import com.scaleup.authentication.dto.BoardResponse;
import com.scaleup.authentication.entity.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.*;

@Service
public interface BoardService {
    BoardResponse post(Long userNo, BoardRequest boardRequest);
    BoardResponse post2(BoardRequest boardRequest);

    BoardResponse getPostForEdit(Long boardNo);

    BoardResponse updatePost(Long boardNo, BoardRequest boardRequest);

    boolean deletePost(Long boardNo);

    BoardResponse getPost(Long boardNo);

    List<BoardResponse> getAllPost();

    PageImpl<BoardResponse> findPostByTitle(String title, Pageable pageable);

    List<BoardResponse> findPostByWriter(String writer);

    Page<BoardResponse> getList(Pageable pageable);
}
