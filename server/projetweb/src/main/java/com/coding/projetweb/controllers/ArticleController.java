package com.coding.projetweb.controllers;

import java.sql.SQLException;
import java.util.List;

import com.coding.models.Utilisateur;
import com.coding.services.ArticleDAO;
import com.coding.services.UserDAO;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.coding.models.Article;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/articles")
public class ArticleController {
    private ArticleDAO dao = new ArticleDAO();

    @GetMapping("")
    public List<Article> getArticle() throws SQLException {
        return dao.getArticle();
    }
    @GetMapping("/consult/{nom}")
    public List<Article> getArticleByName(@PathVariable("nom") String nom) throws SQLException {
        return dao.getArticleByName(nom);
    }
    @GetMapping("/addart/{nom}/{img}/{console}/{description}/{quant}/{prix}/{tag}")
    public Article addArticle(@PathVariable("nom") String nom,@PathVariable("img") String img,@PathVariable("console") String console,@PathVariable("description") String description,@PathVariable("quant") int quant,@PathVariable("prix") int Prix,@PathVariable("tag") String tag) throws SQLException{
        Article art = new Article();
        art.setNomArt(nom);
        art.setImgArt(img);
        art.setNomConsole(console);
        art.setDescription(description);
        art.setQuantArt(quant);
        art.setPrixArt(Prix);
        art.setTag(tag);
        dao.addArticle(art);
        return null;
    }
}
