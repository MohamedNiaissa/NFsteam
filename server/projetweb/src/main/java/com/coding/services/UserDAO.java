package com.coding.services;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.coding.models.User;

public class UserDAO {

    public List<User> getUsers() throws SQLException {
        try {
            Class.forName("com.mysql.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        try (Connection co = DriverManager.getConnection("jdcb:postgresql://ec2-52-212-228-71.eu-west-1.compute.amazonaws.com:63342/db3f79iailn243", "yvbztdfsefctnd", "bc1f85b7855d747407996a7d8e8ddef1921d24756249b98a1e004c9f88621ab0")) {
            String sql = "SELECT * FROM users;";
            try (Statement st = co.createStatement()) {
                try (ResultSet rs = st.executeQuery(sql)) {
                    List<User> list = new ArrayList<>();
                    while (rs.next()) {
                        User u = new User();
                        u.setId(rs.getInt("id"));
                        u.setFirstname(rs.getString("firstname"));
                        u.setPassword(rs.getString("password"));
                        u.setLogin(rs.getString("login"));
                        u.setName(rs.getString("name"));
                        list.add(u);
                    }
                    return list;
                }
            }
        }
    }

    public User getUserById(int id) throws SQLException {
        try (Connection co = DriverManager.getConnection("jdcb:mysql://localhost:63342/projet-web", "root", "toor")) {
            String sql = "SELECT * FROM users where id=?;";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setInt(1, id);
                try (ResultSet rs = st.executeQuery()) {
                    if (rs.next()) {
                        User u = new User();
                        u.setId(rs.getInt("id"));
                        u.setFirstname(rs.getString("firstname"));
                        u.setPassword(rs.getString("password"));
                        u.setLogin(rs.getString("login"));
                        u.setName(rs.getString("name"));
                        return u;
                    }
                    return null;
                }
            }
        }
    }

    public void add(User user) throws SQLException {
        try (Connection co = DriverManager.getConnection("jdcb:mysql://localhost:63342/projet-web", "root", "toor")) {
            String sql = "INSERT INTO users (login, password, fisrtname, name) VALUES(?, ?, ?, ?);";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setString(1, user.getLogin());
                st.setString(2, user.getPassword());
                st.setString(3, user.getFirstname());
                st.setString(4, user.getName());
                st.execute();
            }
        }
    }
}
