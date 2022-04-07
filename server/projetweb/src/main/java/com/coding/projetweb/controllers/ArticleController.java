package com.coding.projetweb.controllers;

import java.sql.SQLException;
import java.util.List;

import com.coding.models.Utilisateur;
import com.coding.services.ArticleDAO;
import com.coding.services.UserDAO;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.coding.models.Article;


@RestController
@RequestMapping("/articles")
public class ArticleController {
    private ArticleDAO dao = new ArticleDAO();


    @GetMapping("")
    public List<Article> getArticle() throws SQLException {
        return dao.getArticle();
    }
}
