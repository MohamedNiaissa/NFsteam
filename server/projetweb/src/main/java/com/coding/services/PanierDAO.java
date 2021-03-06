package com.coding.services;

import com.coding.models.Article;
import com.coding.models.Panier;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class PanierDAO {

    public List<Panier> getPanier() throws SQLException {
        try {
            Class.forName("com.mysql.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        try (Connection co = DriverManager.getConnection("jdbc:postgresql://dumbo.db.elephantsql.com:5432/jtnwwirv", "jtnwwirv", "A--VtkbwHf6vB6VnHWyA7cYGl4_YGfTA")) {
            String sqlArt = "SELECT * FROM panier;";
            try (Statement st = co.createStatement()) {
                try (ResultSet rs = st.executeQuery(sqlArt)) {
                    List<Panier> list = new ArrayList<>();
                    while (rs.next()) {
                        Panier u = new Panier();
                        u.setIdUser(rs.getInt("idUser"));
                        u.setIdArticle(rs.getInt("idArticle"));
                        list.add(u);
                    }
                    return list;
                }
            }
        }
    }

    public List<Panier> getSpecificPanier(int idUser) throws SQLException {
        try {
            Class.forName("com.mysql.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        try (Connection co = DriverManager.getConnection("jdbc:postgresql://dumbo.db.elephantsql.com:5432/jtnwwirv", "jtnwwirv", "A--VtkbwHf6vB6VnHWyA7cYGl4_YGfTA")) {
            String sql = "SELECT * FROM panier where iduser=?;"; // pas de concateneation, pour eviter injection sql
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setInt(1, idUser);
                try (ResultSet rs = st.executeQuery()) {
                    List<Panier> list = new ArrayList<>();
                    while (rs.next()) {
                        Panier p = new Panier();
                        p.setIdUser(rs.getInt("iduser"));
                        p.setIdArticle(rs.getInt("idarticle"));
                        list.add(p);
                    }
                    return list;
                }
            }
        }
    }
    public boolean setPanier(int idUser, int idGame){
        try (Connection co = DriverManager.getConnection("jdbc:postgresql://dumbo.db.elephantsql.com:5432/jtnwwirv", "jtnwwirv", "A--VtkbwHf6vB6VnHWyA7cYGl4_YGfTA")) {
            String sql = "INSERT INTO panier (iduser, idarticle) VALUES(?, ?);";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setInt(1, idUser);
                st.setInt(2, idGame);
                st.execute();
                return true;
            }catch (Error | SQLException error){
                return false;
            }
        }catch (Error | SQLException error){
            return false;
        }
    }
    public boolean removeCommand(int idUser,int idArticle) {
        try (Connection co = DriverManager.getConnection("jdbc:postgresql://dumbo.db.elephantsql.com:5432/jtnwwirv", "jtnwwirv", "A--VtkbwHf6vB6VnHWyA7cYGl4_YGfTA")) {
            String sql = "DELETE FROM panier WHERE idUser = ? and idArticle=?";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setInt(1, idUser);
                st.setInt(2, idArticle);
                st.execute();
                return true;
            }catch (Error | SQLException error){
                return false;
            }
        }catch (Error | SQLException error){
            return false;
        }
    }
    public boolean removeCommands(int idUser) {
        try (Connection co = DriverManager.getConnection("jdbc:postgresql://dumbo.db.elephantsql.com:5432/jtnwwirv", "jtnwwirv", "A--VtkbwHf6vB6VnHWyA7cYGl4_YGfTA")) {
            String sql = "DELETE FROM panier WHERE idUser = ?";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setInt(1, idUser);
                st.execute();
                return true;
            }catch (Error | SQLException error){
                return false;
            }
        }catch (Error | SQLException error){
            return false;
        }
    }
}



