package com.coding.services;

import com.coding.models.Article;


import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class ArticleDAO {

    public List<Article> getArticle() throws SQLException {
        try (Connection co = DriverManager.getConnection("jdbc:postgresql://dumbo.db.elephantsql.com:5432/jtnwwirv", "jtnwwirv", "A--VtkbwHf6vB6VnHWyA7cYGl4_YGfTA")) {
            String sqlArt = "SELECT * FROM article;";
            try (Statement st = co.createStatement()) {
                try (ResultSet rs = st.executeQuery(sqlArt)) {
                    List<Article> list = new ArrayList<>();
                    while (rs.next()) {
                        Article u = new Article();
                        u.setIdArticle(rs.getInt("idarticle"));
                        u.setNomArt(rs.getString("nomart"));
                        u.setImgArt(rs.getString("imgart"));
                        u.setNomConsole(rs.getString("nomconsole"));
                        u.setDescription(rs.getString("description"));
                        u.setQuantArt(rs.getInt("quantart"));
                        u.setPrixArt(rs.getInt("prixart"));
                        u.setTag(rs.getString("tag"));
                        list.add(u);
                    }
                    return list;
                }
            }
        }
    }
    public List<Article> getArticleByName(String Name) throws SQLException {
        try (Connection co = DriverManager.getConnection("jdbc:postgresql://dumbo.db.elephantsql.com:5432/jtnwwirv", "jtnwwirv", "A--VtkbwHf6vB6VnHWyA7cYGl4_YGfTA")) {
            String sqlArt = "SELECT * FROM article";
            try (Statement st = co.createStatement()) {
                try (ResultSet rs = st.executeQuery(sqlArt)) {
                    List<Article> list = new ArrayList<>();
                    while (rs.next()) {
                        if (rs.getString("nomArt").equals(Name))
                        {
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
                    }
                    return list;
                }
            }
        }
    }
    public Article getArticleById(int ID) throws SQLException {
        try (Connection co = DriverManager.getConnection("jdbc:postgresql://dumbo.db.elephantsql.com:5432/jtnwwirv", "jtnwwirv", "A--VtkbwHf6vB6VnHWyA7cYGl4_YGfTA")) {
            String sqlArt = "SELECT * FROM article";
            try (Statement st = co.createStatement()) {
                try (ResultSet rs = st.executeQuery(sqlArt)) {
                    List<Article> list = new ArrayList<>();
                    while (rs.next()) {
                        if (rs.getInt("idArticle") == ID)
                        {
                            Article u = new Article();
                            u.setIdArticle(rs.getInt("idArticle"));
                            u.setNomArt(rs.getString("nomArt"));
                            u.setImgArt(rs.getString("imgArt"));
                            u.setNomConsole(rs.getString("nomConsole"));
                            u.setDescription(rs.getString("description"));
                            u.setQuantArt(rs.getInt("quantArt"));
                            u.setPrixArt(rs.getInt("prixArt"));
                            u.setTag(rs.getString("tag"));
                            return u;
                        }
                    }
                    return null;
                }
            }
        }
    }
    public void addArticle(Article art) throws SQLException {
        try (Connection co = DriverManager.getConnection("jdbc:postgresql://dumbo.db.elephantsql.com:5432/jtnwwirv", "jtnwwirv", "A--VtkbwHf6vB6VnHWyA7cYGl4_YGfTA")) {
            String sql = "INSERT INTO article (nomart, imgart, nomconsole, description, quantart, prixart, tag) VALUES(?, ?, ?, ?, ?, ?, ?);";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setString(1, art.getNomArt());
                st.setString(2, art.getImgArt());
                st.setString(3, art.getNomConsole());
                st.setString(4, art.getDescription());
                st.setInt(5, art.getQuantArt());
                st.setFloat(6, art.getPrixArt());
                st.setString(7, art.getTag());
                st.execute();
            }
        }
    }
    public void updateQuant(int id, int quant) throws SQLException{
        try (Connection co = DriverManager.getConnection("jdbc:postgresql://dumbo.db.elephantsql.com:5432/jtnwwirv", "jtnwwirv", "A--VtkbwHf6vB6VnHWyA7cYGl4_YGfTA")) {
            String sql = "UPDATE article SET quantart = ? WHERE idArticle = ?;";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setInt(1, quant);
                st.setInt(2, id);
                st.execute();
            }
        }
    }
}
