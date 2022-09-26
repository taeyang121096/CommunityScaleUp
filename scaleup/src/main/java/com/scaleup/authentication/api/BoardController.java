package com.scaleup.authentication.api;

import com.scaleup.authentication.dto.BoardRequest;
import com.scaleup.authentication.dto.BoardResponse;
import com.scaleup.authentication.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("api")
public class BoardController {
    private final BoardService boardService;

    /**
     * 1. 게시판 클릭하면 내용 보여주기 / 상세보기 -> ok
     * 2. 조회수 증가 로직 -> 글 클릭했을때 늘어나야 되는가?/ -> ok
     * 3. 게시글 검색 로직 -> 작성자 / 제목
     * 4. 전체 게시글 검색 + Paging
     */

    /**
     * 전체 게시글 검색 / 일단 페이징은 안하고
     */
    @GetMapping("/board")
    public ResponseEntity<?> getAllPost(){
        List<BoardResponse> boards = boardService.getAllPost();
        return ResponseEntity.ok(boards);
    }

    /**
     * 게시판 상세보기
     */
    @GetMapping("/board/{boardNo}")
    public ResponseEntity<?> getPost(@PathVariable("boardNo") Long boardNo) {
        BoardResponse post = boardService.getPost(boardNo);
        return ResponseEntity.ok(post);
    }

    /**
     * 게시판 글 추가
     */
    @PostMapping("/board/{userNo}")
    public ResponseEntity<?> savePost(@PathVariable("userNo") Long userNo,
                                      @RequestBody BoardRequest boardRequest) {
        BoardResponse post = boardService.post(userNo, boardRequest);
        return ResponseEntity.ok(post);
    }

    /**
     * 게시판 글 수정전 데이터 가져오기
     */
    @GetMapping("/board/{boardNo}/edit")
    public ResponseEntity<?> getPostForEdit(@PathVariable("boardNo") Long boardNo) {
        BoardResponse boardResponse = boardService.getPostForEdit(boardNo);
        return ResponseEntity.ok(boardResponse);
    }

    /**
     * 게시판 글 수정
     */
    @PostMapping("/board/{boardNo}/edit")
    public ResponseEntity<?> updatePost(@PathVariable("boardNo") Long boardNo,
                                        @RequestBody BoardRequest boardRequest) {
        BoardResponse boardResponse = boardService.updatePost(boardNo, boardRequest);
        return ResponseEntity.ok(boardResponse);
    }

    /**
     * 게시판 글 삭제
     */
    @GetMapping("/board/{boardNo}/delete")
    public ResponseEntity<?> deletePost(@PathVariable("boardNo") Long boardNo) {
        if (!boardService.deletePost(boardNo))
            return new ResponseEntity<String>("fail", HttpStatus.NOT_IMPLEMENTED);
        else
            return new ResponseEntity<String>("success", HttpStatus.OK);
    }

    /**
     * 게시판 글 검색 by title, writer
     * /api/board?title=""
     */
    @GetMapping("/board/title")
    public ResponseEntity<?> findPostByTitle(@RequestParam("title") String title) {
        List<BoardResponse> postByTitle = boardService.findPostByTitle(title);
        return ResponseEntity.ok(postByTitle);
    }

    @GetMapping("/board/writer")
    public ResponseEntity<?> findPostByWriter(@RequestParam("writer") String writer) {
        List<BoardResponse> postByWriter = boardService.findPostByWriter(writer);
        return ResponseEntity.ok(postByWriter);
    }

//    /**
//     * 게시판 list 가져오기
//     */
//    @GetMapping("/board/list")
//    public ResponseEntity<?> getBoardList(@RequestParam(value = "page", defaultValue = "0") int page) {
//        Page<Board> paging = this.boardService.getList(page);
//        return ResponseEntity.ok(paging);
//    }
}
