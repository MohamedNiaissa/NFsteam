package com.coding.projetweb.controllers;

import java.sql.SQLException;
import java.util.List;

import com.coding.models.Utilisateur;
import com.coding.services.UserDAO;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/users")
public class UsersController {
    private UserDAO dao = new UserDAO();

    @GetMapping("")
    public List<Utilisateur> getUsers() throws SQLException{
        return dao.getUsers();
    }

    @GetMapping("/adduser/{nom}/{mail}/{mdp}/{monnaie}")
    public Utilisateur addUser(@PathVariable("nom") String nom,@PathVariable("mail") String mail,@PathVariable("mdp") String mdp,@PathVariable("monnaie") int monnaie) throws SQLException{
        Utilisateur user = new Utilisateur();
        user.setNom(nom);
        user.setMail(mail);
        user.setMdp(mdp);
        user.setMonnaie(monnaie);
        dao.addUser(user);
        return null;
        
    }
}
