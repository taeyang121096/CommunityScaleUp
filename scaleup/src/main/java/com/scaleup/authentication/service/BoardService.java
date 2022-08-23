package com.scaleup.authentication.service;

import com.scaleup.authentication.dto.BoardRequest;
import com.scaleup.authentication.dto.BoardResponse;
import com.scaleup.authentication.entity.Board;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Service
public interface BoardService {
    BoardResponse post(Long userNo, BoardRequest boardRequest);

    BoardResponse getPost(Long boardNo);

    BoardResponse updatePost(Long boardNo, BoardRequest boardRequest);

    boolean deletePost(Long boardNo);

    Page<Board> getList(int page);
}
