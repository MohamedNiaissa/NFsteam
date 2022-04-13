package com.coding.projetweb.controllers;
import java.sql.SQLException;
import java.util.ArrayList;
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
import org.springframework.web.bind.annotation.RestController;


import com.coding.models.Article;


@RestController
@CrossOrigin
@RequestMapping("/panier")
public class PanierController {
    private PanierDAO dao = new PanierDAO();
    private ArticleDAO daoa = new ArticleDAO();
    private UserDAO daou = new UserDAO();

    @GetMapping("")
    public List<Panier> getPanier() throws SQLException{
        return dao.getPanier();
    }
    @GetMapping("/{idUser}")
    public List<Panier> getSpecificPanier(@PathVariable("idUser") int idUser ) throws SQLException{
        return dao.getSpecificPanier(idUser);
    }
    @GetMapping("/retreat/{idUser}/{idArticle}")
    public boolean removeCommand(@PathVariable("idUser") int idUser, @PathVariable("idArticle") int idArticle) throws SQLException{
        return dao.removeCommand(idUser,idArticle);
    }
    @GetMapping("/newCom/{nomUser}/{nomgame}")
    public boolean setSpecificPanier(@PathVariable("nomUser") String nomUser, @PathVariable("nomgame") String nomgame) throws SQLException{
        List<Utilisateur> list = new ArrayList<Utilisateur>();
        list = daou.getUsers();
        int idGame;
        int idUser;
        idGame = daoa.getArticleByName(nomgame).get(0).getIdArticle();
        for (int i = 0; i < list.size(); i++) {
            if (list.get(i).getNom().equals(nomUser)){
                idUser = list.get(i).getIdUser();
                return dao.setPanier(idUser,idGame);
            }
        }
    return false;
    }
}
