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
// @CrossOrigin
@CrossOrigin(origins = "http://127.0.0.1:5500", allowedHeaders = "http://127.0.0.1:5500")
@RequestMapping("/users")
public class UsersController {
    private UserDAO dao = new UserDAO();

    // @CrossOrigin
    @CrossOrigin(origins = "http://127.0.0.1:5500", allowedHeaders = "http://127.0.0.1:5500")
    @GetMapping("")
    public List<Utilisateur> getUsers() throws SQLException{
        return dao.getUsers();
    }

    //@CrossOrigin
    @CrossOrigin(origins = "http://127.0.0.1:5500", allowedHeaders = "http://127.0.0.1:5500")
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

    @CrossOrigin(origins = "http://127.0.0.1:5500", allowedHeaders = "http://127.0.0.1:5500")
    @GetMapping("/removeuser/{nom}")
    public  Object removeUser(@PathVariable("nom") String nom) throws SQLException{
        return dao.removeUser(nom);
    }
}
