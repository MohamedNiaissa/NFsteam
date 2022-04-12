package com.coding.projetweb.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

@CrossOrigin
//@CrossOrigin(origins = "http://localhost:127.0.0.1")
@Controller
public class HomeController {
    
    @RequestMapping("/bob")
    public String index(){
        return "bob";
    }
}
