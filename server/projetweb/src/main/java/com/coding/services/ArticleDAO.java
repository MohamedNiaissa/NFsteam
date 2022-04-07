package com.coding.services;

import com.coding.models.Article;
import com.coding.models.Utilisateur;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ArticleDAO {

    public List<Article> getArticle() throws SQLException {
        try {
            Class.forName("com.mysql.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        try (Connection co = DriverManager.getConnection("jdbc:postgresql://dumbo.db.elephantsql.com:5432/jtnwwirv", "jtnwwirv", "A--VtkbwHf6vB6VnHWyA7cYGl4_YGfTA")) {
            String sqlArt = "SELECT * FROM article;";
            try (Statement st = co.createStatement()) {
                try (ResultSet rs = st.executeQuery(sqlArt)) {
                    List<Article> list = new ArrayList<>();
                    while (rs.next()) {
                        Article u = new Article();
                        u.setIdArticle(rs.getInt("idArticle"));
                        u.setNomArt(rs.getString("nomArt"));
                        u.setImgArt(rs.getString("imgArt"));
                        u.setNomConsole(rs.getString("nomConsole"));
                        u.setDescription(rs.getString("description"));
                        u.setQuantArt(rs.getInt("quantArt"));
                        u.setPrixArt(rs.getInt("prixArt"));
                        u.setTag(rs.getString("tag"));
                        list.add(u);
                    }
                    return list;
                }
            }
        }
    }
}
