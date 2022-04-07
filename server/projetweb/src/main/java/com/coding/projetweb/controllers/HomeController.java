package com.coding.projetweb.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

@CrossOrigin(origins = "http://localhost:8080")
@Controller
public class HomeController {
    
    @RequestMapping("/bob")
    public String index(){
        return "bob";
    }
}
