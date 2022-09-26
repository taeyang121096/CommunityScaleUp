package com.scaleup.authentication.repository;

import com.scaleup.authentication.dto.BoardResponse;
import com.scaleup.authentication.entity.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.*;


public interface BoardRepository extends JpaRepository<Board, Long> {
    @Query("SELECT b FROM Board b WHERE b.title LIKE %:title%")
    List<Board> findBoardByTitle(String title);

    @Query("select b from Board b where b.writer Like %:writer%")
    List<Board> findBoardByWriter(String writer);
}
