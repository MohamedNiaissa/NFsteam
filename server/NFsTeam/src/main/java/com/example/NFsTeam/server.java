package com.example.server;

import java.sql.DriverManager;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class server {

    public String getPassword(id) throws SQLException {
        try (Connection co = DriverManager.getConnection("dbc:postgresql://dumbo.db.elephantsql.com:5432/jtnwwirv\", \"jtnwwirv\", \"A--VtkbwHf6vB6VnHWyA7cYGl4_YGfTA", "utilisateur", "motdepasse")) {
            String sql = "SELECT Password FROM Utilisateur where idUser=?;";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setInt(1,id);
                try (ResultSet rs = st.execute()) {
                    return rs.getInt("Password");
                }
                return null;
            }
        }
    }
    public List<Produit> getProduit() throws SQLException {
        try (Connection co = DriverManager.getConnection("dbc:postgresql://dumbo.db.elephantsql.com:5432/jtnwwirv\", \"jtnwwirv\", \"A--VtkbwHf6vB6VnHWyA7cYGl4_YGfTA", "utilisateur", "motdepasse")) {
            String sql = "SELECT * FROM Produit;";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                try (ResultSet rs = st.execute()) {
                    List<> =new ArrayList<>();
                    while (rs.next()) {
                        User u = new Object();
                        u.SetIdProduit(rs.getInt("idProduit"));
                        u.SetTitre(rs.getString("Titre"));
                        u.SetDescription(rs.getString("Description"));
                        u.SetPrix(rs.getFloat("Prix"));
                        u.SetQuantité(rs.getInt("Quantite"));
                        u.SetString(rs.getString("Image"));
                        List.add(u);
                    }
                    return List;
                }
                return null;
            }
        }
    }
    public void setUser(id,name,login,password) throws SQLException {
        try (Connection co = DriverManager.getConnection("dbc:postgresql://dumbo.db.elephantsql.com:5432/jtnwwirv\", \"jtnwwirv\", \"A--VtkbwHf6vB6VnHWyA7cYGl4_YGfTA", "utilisateur", "motdepasse")) {
            String sql = "INSERT INTO Utilisateur (idUser,Name,Login,Password) VALUES(?,?,?,?)";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setInt(1,id);
                st.setInt(2,name);
                st.setInt(3,login);
                st.setInt(4,password);
                st.execute();
            }
        }
    }
    public void setProduit(id,titre,description,prix,quantite,image) throws SQLException {
        try (Connection co = DriverManager.getConnection("BDD", "utilisateur", "motdepasse")) {
            String sql = "INSERT INTO Produit (idProduit,Titre,Description,Prix,Quantite,Image) VALUES(?,?,?,?,?,?)";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setInt(1,id);
                st.setString(2,titre);
                st.setString(3,description);
                st.setFloat(4,prix);
                st.setInt(5,quantite);
                st.setString(6,image);
                st.execute();
            }
        }
    }
    public void setPanier(idPanier,idUser,idProduit) throws SQLException {
        try (Connection co = DriverManager.getConnection("BDD", "utilisateur", "motdepasse")) {
            String sql = "INSERT INTO Produit (idProduit,Titre,Description,Prix,Quantite,Image) VALUES(?,?,?,?,?,?)";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setInt(1,id);
                st.setString(2,titre);
                st.setString(3,description);
                st.setFloat(4,prix);
                st.setInt(5,quantite);
                st.setString(6,image);
                st.execute();
            }
        }
    }
}