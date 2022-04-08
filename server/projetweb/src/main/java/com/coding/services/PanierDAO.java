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

    public Panier getSpecificPanier(int idUser) throws SQLException {
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
                    if (rs.next()) {
                        Panier p = new Panier();
                        p.setIdUser(rs.getInt("iduser"));
                        p.setIdArticle(rs.getInt("idarticle"));
                        return p;
                    }
                    return null;
                }
            }
        }
    }


}



