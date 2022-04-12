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
@CrossOrigin
@RequestMapping("/users")
public class UsersController {
    private UserDAO dao = new UserDAO();

    // @CrossOrigin
    @GetMapping("")
    public List<Utilisateur> getUsers() throws SQLException{
        return dao.getUsers();
    }

    //@CrossOrigin
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

    //-----------------------------------------------------Modif User-----------------------------------------------------

    @GetMapping("/removeuser/{nom}")
    public  Object removeUser(@PathVariable("nom") String nom) throws SQLException{
        return dao.removeUser(nom);
    }

    @GetMapping("/updateusernom/{nom}/{newnom}")
    public  Object updateName(@PathVariable("nom") String nom,@PathVariable("newnom") String newnom) throws SQLException{
        return dao.updateName(nom,newnom);
    }

    @GetMapping("/updateusermail/{nom}/{mail}")
    public  Object updateMail(@PathVariable("mail") String mail, @PathVariable("nom") String nom) throws SQLException{
        return dao.updateMail(nom,mail);
    }

    @GetMapping("/updateusermdp/{nom}/{mdp}")
    public  Object updateMdp(@PathVariable("mdp") String mdp, @PathVariable("nom") String nom) throws SQLException{
        return dao.updateMdp(nom,mdp);
    }

    @GetMapping("/updateusermonnaie/{nom}/{monnaie}")
    public  Object updateMonnaie(@PathVariable("monnaie") int monnaie, @PathVariable("nom") String nom) throws SQLException{
        return dao.updateMonnaie(nom,monnaie);
    }

    //-----------------------------------------------------Modif User-----------------------------------------------------
    




    //-----------------------------------------------------Login User-----------------------------------------------------

    @GetMapping("/login/{nom}/{mdp}")
    public  Object fetchUser(@PathVariable("nom") String nom, @PathVariable("mdp") String mdp) throws SQLException{
        return dao.fetchUser(nom,mdp);
    }
    

    //-----------------------------------------------------Login User-----------------------------------------------------

}

