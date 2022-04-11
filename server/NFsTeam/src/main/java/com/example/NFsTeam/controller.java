package com.coding.controller;

import java.sql.SQLException;
import java.util.List;

import com.coding.models.User;
import com.coding.services.UserDAO;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Restcontroller
@RequestMapping("/object")
public class controller {
    private server dao = new server();
    @GetMapping("")
    public String getObject() throws SQLException
    {
        return dao.getObject();
    }
}