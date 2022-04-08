package com.coding.models;

public class Utilisateur {
    // private int idUser;
    private String mail;
    private String mdp;
    private String nom;
    private int monnaie;

    public Utilisateur(String string, String string2, String string3, int i) {
    }

    public Utilisateur(){}
    // public int getIdUser() {
    //     return idUser;
    // }
    // public void setIdUser(int idUser) {
    //     this.idUser = idUser;
    // }
    public String getMail() {
        return mail;
    }
    public void setMail(String mail) {
        this.mail = mail;
    }
    public String getMdp() {
        return mdp;
    }
    public void setMdp(String mdp) {
        this.mdp = mdp;
    }
    public String getNom() {
        return nom;
    }
    public void setNom(String nom) {
        this.nom = nom;
    }
    public int getMonnaie(){
        return monnaie;
    }
    public void setMonnaie(int monnaie){
        this.monnaie = monnaie;
    }

}
