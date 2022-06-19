package com.scaleup.scaleup;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

@Controller
public class TestController {

    @GetMapping("/")
    public String test(Model model){
        System.out.println("test");
        model.addAttribute("name","TestController");
        return "index";
    }
}
