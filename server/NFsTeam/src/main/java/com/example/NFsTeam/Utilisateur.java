package com.coding.models;

public class Utilisateur {
    private int idUser;
    private String Name;
    private String Login;
    private String Password;
    public int getIdUser() {
        return idUser;
    }
    public void setIdUser(int idUser) {
        this.idUser = idUser;
    }
    public String getName() {
        return Name;
    }
    public void setName(String Name) {
        this.Name = Name;
    }
    public String getLogin() {
        return Login;
    }
    public void setLogin(String Login) {
        this.Login = Login;
    }
    public String getPassword() {
        return Password;
    }
    public void setPassword(String Password) {
        this.Password = Password;
    }

}
