package com.coding.projetweb.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
    
    @RequestMapping("/bob")
    public String index(){
        return "bob";
    }
}
