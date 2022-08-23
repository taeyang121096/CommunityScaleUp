package com.scaleup.authentication.api;

import com.scaleup.authentication.dto.BoardRequest;
import com.scaleup.authentication.dto.BoardResponse;
import com.scaleup.authentication.entity.Board;
import com.scaleup.authentication.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("api")
public class BoardController {
    private final BoardService boardService;

    /**
     * 게시판 글 추가
     */
    @PostMapping("/board/{userId}")
    public ResponseEntity<?> savePost(@PathVariable("userId") Long userNo,
                                      @RequestBody BoardRequest boardRequest) {
        BoardResponse post = boardService.post(userNo, boardRequest);
        return ResponseEntity.ok(post);
    }

    /**
     * 게시판 글 수정전 데이터 가져오기
     */
    @GetMapping("/board/{boardId}/edit")
    public ResponseEntity<?> getPost(@PathVariable("boardId") Long boardNo) {
        BoardResponse boardResponse = boardService.getPost(boardNo);
        return ResponseEntity.ok(boardResponse);
    }

    /**
     * 게시판 글 수정
     */
    @PostMapping("/board/{boardId}/edit")
    public ResponseEntity<?> updatePost(@PathVariable("boardId") Long boardNo,
                                        @RequestBody BoardRequest boardRequest) {
        BoardResponse boardResponse = boardService.updatePost(boardNo, boardRequest);
        return ResponseEntity.ok(boardResponse);
    }

    /**
     * 게시판 글 삭제
     */
    @GetMapping("/board/{boardId}/delete")
    public ResponseEntity<?> deletePost(@PathVariable("boardId") Long boardNo) {
        if (!boardService.deletePost(boardNo))
            return new ResponseEntity<String>("fail", HttpStatus.NOT_IMPLEMENTED);
        else
            return new ResponseEntity<String>("success", HttpStatus.OK);
    }

    /**
     * 게시판 list 가져오기
     */
    @GetMapping("/board/list")
    public ResponseEntity<?> getBoardList(@RequestParam(value = "page", defaultValue = "0") int page) {
        Page<Board> paging = this.boardService.getList(page);
        return ResponseEntity.ok(paging);
    }
}
