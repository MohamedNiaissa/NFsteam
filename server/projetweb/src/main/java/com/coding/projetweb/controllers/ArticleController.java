package com.coding.projetweb.controllers;

import java.sql.SQLException;
import java.util.List;

import com.coding.services.ArticleDAO;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;
//import org.springframework.web.bind.annotation.RequestMapping;


import com.coding.models.Article;


@CrossOrigin
@RestController
@RequestMapping("/articles")
public class ArticleController {
    private static final Logger log = LoggerFactory.getLogger(ArticleController.class);
    private ArticleDAO dao = new ArticleDAO();

    @GetMapping("")
    public List<Article> getArticle() throws SQLException {
        return dao.getArticle();
    }
    @GetMapping("/consult/{nom}")
    public List<Article> getArticleByName(@PathVariable("nom") String nom) throws SQLException {
        return dao.getArticleByName(nom);
    }
    @GetMapping("/makePan/{id}")
    public List<Article> getArticleById(@PathVariable("id") String id) throws SQLException {
        return dao.getArticleById(id);
    }
    @PutMapping("/addart")
    public Article addArticle(@RequestBody Article article) throws SQLException{  // cette methode du body et cette generation de l'instance marche seulement pour le PUT
        Article art = new Article();
        art.setNomArt(article.getNomArt());
        art.setImgArt(article.getImgArt());
        art.setNomConsole(article.getNomConsole());
        art.setDescription(article.getDescription());
        art.setQuantArt(article.getQuantArt());
        art.setPrixArt(article.getPrixArt());
        art.setTag(article.getTag());
        dao.addArticle(art);
        log.debug("addArticle : {}", article);
        return art;
    }


    /****************************************** MODIF ARTICLE ******************************************/

    @DeleteMapping("/deleteart/{nom}")
    public Object removeArticle(@PathVariable("nom") String nom) throws SQLException {
        log.debug("removeArticle {}",nom);
        return dao.removeArticle(nom);
    }

    @PostMapping("/updateartnom/{nom}/{newnom}")
    public  Object updateNameArt(@PathVariable("nom") String nom,@PathVariable("newnom") String newnom) throws SQLException{
        return dao.updateNameArt(nom,newnom);
    }

    @PostMapping("/updateartdesc/{nom}/{desc}/{newDesc}")
    public  Object updateDesc(@PathVariable("newDesc") String newDesc,@PathVariable("nom") String nom) throws SQLException{
        return dao.updateDesc(newDesc,nom);
    }

    @PostMapping("/updateartsupp/{nom}/{newSupp}")
    public  Object updateMdp(@PathVariable("newSupp") String newSupp,@PathVariable("nom") String nom) throws SQLException{
        return dao.updateSupport(newSupp,nom);
    }

    @PostMapping("/updatearttag/{nom}/{newTag}")
    public  Object updateTag(@PathVariable("newTag") String newTag,@PathVariable("nom") String nom) throws SQLException{
        return dao.updateTag(newTag,nom);
    }

    @PostMapping("/updateartprix/{nom}/{newPrix}")
    public  Object updatePrix(@PathVariable("newPrix") int newPrix,@PathVariable("nom") String nom) throws SQLException{
        return dao.updatePrix(newPrix,nom);
    }
    @PostMapping("/updateartquant/{nom}/{newQuant}")
    public  Object updateQuant(@PathVariable("newQuant") int newQuant,@PathVariable("nom") String nom) throws SQLException{
        return dao.updateQuant(newQuant,nom);
    }
    @PostMapping("/updateartimg/{nom}/{newImg}")
    public  Object updateImg(@PathVariable("newImg") String newImg,@PathVariable("nom") String nom) throws SQLException{
        return dao.updateImg(newImg,nom);
    }


}
