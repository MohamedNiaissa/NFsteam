package com.coding.services;
import java.io.Console;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.coding.models.Article;
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
                        u.setMonnaie(rs.getInt("monnaie"));
                        list.add(u);
                    }
                    return list;
                }
            }
        }
    }
    

        public List<Utilisateur> fetchUser(String nom,String mdp) throws SQLException {
            try (Connection co = DriverManager.getConnection("jdbc:postgresql://dumbo.db.elephantsql.com:5432/jtnwwirv", "jtnwwirv", "A--VtkbwHf6vB6VnHWyA7cYGl4_YGfTA")) {
                String sql = "SELECT * FROM utilisateur WHERE nom = ? AND mdp = ?";
                try (PreparedStatement st = co.prepareStatement(sql)) {
                    st.setString(1, nom);
                    st.setString(2, mdp);
                    
                    try (ResultSet rs = st.executeQuery()) {
                        List<Utilisateur> list = new ArrayList<>();
    
                        if (rs.next()) {
                            Utilisateur u = new Utilisateur();
                            u.setMdp(rs.getString("mdp"));
                            u.setMail(rs.getString("mail"));
                            u.setNom(rs.getString("nom"));
                            u.setMonnaie(rs.getInt("monnaie"));
                            list.add(u);
                        }
                        return list;
                    }
                }
            }
        }
    public Utilisateur getUserByName(String name) throws SQLException {
        try (Connection co = DriverManager.getConnection("jdbc:postgresql://dumbo.db.elephantsql.com:5432/jtnwwirv", "jtnwwirv", "A--VtkbwHf6vB6VnHWyA7cYGl4_YGfTA")) {
            String sql = "SELECT * FROM utilisateur where nom=?;"; // pas de concateneation, pour eviter injection sql
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setString(1, name);
                try (ResultSet rs = st.executeQuery()) {
                    if (rs.next()) {
                        Utilisateur u = new Utilisateur();
                        u.setMdp(rs.getString("mdp"));
                        u.setMail(rs.getString("mail"));
                        u.setNom(rs.getString("nom"));
                        u.setMonnaie(rs.getInt("monnaie"));
                        return u;
                    }
                    return null;
                }
            }
        }
    }

    public void addUser(Utilisateur user) throws SQLException {
        try (Connection co = DriverManager.getConnection("jdbc:postgresql://dumbo.db.elephantsql.com:5432/jtnwwirv", "jtnwwirv", "A--VtkbwHf6vB6VnHWyA7cYGl4_YGfTA")) {
            String sql = "INSERT INTO utilisateur (nom, mail, mdp, monnaie ) VALUES(?, ?, ?, ?);";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setString(1, user.getNom());
                st.setString(2, user.getMail());
                st.setString(3, user.getMdp());
                st.setInt(4, user.getMonnaie());
                st.execute();
            }
        }
    }


    public Object removeUser(String nameUser) throws SQLException {
        try (Connection co = DriverManager.getConnection("jdbc:postgresql://dumbo.db.elephantsql.com:5432/jtnwwirv", "jtnwwirv", "A--VtkbwHf6vB6VnHWyA7cYGl4_YGfTA")) {
            String sql = "DELETE FROM utilisateur WHERE nom = ?";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setString(1, nameUser);
                st.execute();
            }
        }
        return nameUser;
    }


    public Object updateName(String nom,String nameUser) throws SQLException {
        try (Connection co = DriverManager.getConnection("jdbc:postgresql://dumbo.db.elephantsql.com:5432/jtnwwirv", "jtnwwirv", "A--VtkbwHf6vB6VnHWyA7cYGl4_YGfTA")) {
            String sql = "UPDATE utilisateur SET nom = ? WHERE nom = ?";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setString(1, nameUser);
                st.setString(2, nom);
                st.execute();
            }
        }
        return nameUser;
    }


    

    public Object updateMail(String nameUser, String mail) throws SQLException {
        try (Connection co = DriverManager.getConnection("jdbc:postgresql://dumbo.db.elephantsql.com:5432/jtnwwirv", "jtnwwirv", "A--VtkbwHf6vB6VnHWyA7cYGl4_YGfTA")) {
            String sql = "UPDATE utilisateur SET mail = ? WHERE nom = ?";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setString(1, mail);
                st.setString(2, nameUser);
                st.execute();
            }
        }
        return mail;
    }


    public boolean updateMonnaie(String nameUser, int monnaie) {
        try (Connection co = DriverManager.getConnection("jdbc:postgresql://dumbo.db.elephantsql.com:5432/jtnwwirv", "jtnwwirv", "A--VtkbwHf6vB6VnHWyA7cYGl4_YGfTA")) {
            String sql = "UPDATE utilisateur SET monnaie = ? WHERE nom = ?";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setInt(1, monnaie);
                st.setString(2, nameUser);
                st.execute();
                return true;
            }catch (Error | SQLException error){
                return false;
            }
        }catch (Error | SQLException error){
            return false;
        }
    }


    public Object updateMdp(String nameUser, String mdp) throws SQLException {
        try (Connection co = DriverManager.getConnection("jdbc:postgresql://dumbo.db.elephantsql.com:5432/jtnwwirv", "jtnwwirv", "A--VtkbwHf6vB6VnHWyA7cYGl4_YGfTA")) {
            String sql = "UPDATE utilisateur SET mdp = ? WHERE nom = ?";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setString(1, mdp);
                st.setString(2, nameUser);
                st.execute();
            }
        }
        return nameUser;
    }
}
