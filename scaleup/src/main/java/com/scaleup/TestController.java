package com.scaleup;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api")
public class TestController {

    @GetMapping("/ip")
    public ResponseEntity<String> ip(HttpServletRequest request) {
        return ResponseEntity.ok(request.getRemoteAddr());
    }
}
