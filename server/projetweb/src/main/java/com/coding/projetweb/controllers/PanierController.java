package com.coding.projetweb.controllers;
import java.sql.SQLException;
import java.util.List;

import com.coding.models.Panier;
import com.coding.models.Utilisateur;
import com.coding.services.ArticleDAO;
import com.coding.services.PanierDAO;
import com.coding.services.UserDAO;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.coding.models.Article;


@RestController
@CrossOrigin
@RequestMapping("/panier")
public class PanierController {
    private PanierDAO dao = new PanierDAO();


    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("")
    public List<Panier> getPanier() throws SQLException{
        return dao.getPanier();
    }

    @GetMapping("/{idArt}")
    public Panier getSpecificPanier(@PathVariable("idArt") int idArt ) throws SQLException{
        return dao.getSpecificPanier(idArt);

    }

}
