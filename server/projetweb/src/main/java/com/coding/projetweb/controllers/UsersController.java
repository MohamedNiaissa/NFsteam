package com.coding.projetweb.controllers;

import java.sql.SQLException;
import java.util.List;

import com.coding.models.Utilisateur;
import com.coding.services.UserDAO;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:8080/users")
@RequestMapping("/users")
public class UsersController {
    private UserDAO dao = new UserDAO();

    @CrossOrigin(origins = "http://localhost:8080/users")
    @GetMapping("")
    public List<Utilisateur> getUsers() throws SQLException{
        return dao.getUsers();
    }
}
