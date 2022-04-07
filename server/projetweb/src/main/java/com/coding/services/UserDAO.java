package com.coding.services;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.coding.models.Utilisateur;

public class UserDAO {

    public List<Utilisateur> getUsers() throws SQLException {
        try {
            Class.forName("com.mysql.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        try (Connection co = DriverManager.getConnection("jdbc:postgresql://dumbo.db.elephantsql.com:5432/jtnwwirv", "jtnwwirv", "A--VtkbwHf6vB6VnHWyA7cYGl4_YGfTA")) {
            String sql = "SELECT * FROM utilisateur;";
            try (Statement st = co.createStatement()) {
                try (ResultSet rs = st.executeQuery(sql)) {
                    List<Utilisateur> list = new ArrayList<>();
                    while (rs.next()) {
                        Utilisateur u = new Utilisateur();
                        u.setIdUser(rs.getInt("idUser"));
                        u.setMdp(rs.getString("mdp"));
                        u.setMail(rs.getString("mail"));
                        u.setNom(rs.getString("nom"));
                        list.add(u);
                    }
                    return list;
                }
            }
        }
    }

    public Utilisateur getUserById(int id) throws SQLException {
        try (Connection co = DriverManager.getConnection("jdcb:mysql://localhost:63342/projet-web", "root", "toor")) {
            String sql = "SELECT * FROM utilisateur where id=?;"; // pas de concateneation, pour eviter injection sql
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setInt(1, id);
                try (ResultSet rs = st.executeQuery()) {
                    if (rs.next()) {
                        Utilisateur u = new Utilisateur();
                        u.setIdUser(rs.getInt("idUser"));
                        u.setMdp(rs.getString("mdp"));
                        u.setMail(rs.getString("mail"));
                        u.setNom(rs.getString("nom"));
                        return u;
                    }
                    return null;
                }
            }
        }
    }

    public void add(Utilisateur user) throws SQLException {
        try (Connection co = DriverManager.getConnection("jdcb:mysql://localhost:63342/projet-web", "root", "toor")) {
            String sql = "INSERT INTO utilisateur (mail, mdp, nom) VALUES(?, ?, ?);";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setString(1, user.getMail());
                st.setString(2, user.getMdp());
                st.setString(4, user.getNom());
                st.execute();
            }
        }
    }
}
