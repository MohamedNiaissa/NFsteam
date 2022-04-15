package com.coding.models;

public class Article {
    private int idArticle;
    private String nomArt;
    private String imgArt;
    private String nomConsole;
    private String description;
    private int quantArt;
    private int prixArt;
    private String tag;


    public int getIdArticle() {
        return idArticle;
    }

    public void setIdArticle(int idArticle) {
        this.idArticle = idArticle;
    }

    public String getNomArt() {
        return nomArt;
    }

    public void setNomArt(String nomArt) {
        this.nomArt = nomArt;
    }

    public String getImgArt() {
        return imgArt;
    }

    public void setImgArt(String imgArt) {
        this.imgArt = imgArt;
    }

    public String getNomConsole() {
        return nomConsole;
    }

    public void setNomConsole(String nomConsole) {
        this.nomConsole = nomConsole;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getQuantArt() {
        return quantArt;
    }

    public void setQuantArt(int quantArt) {
        this.quantArt = quantArt;
    }

    public int getPrixArt() {
        return prixArt;
    }

    public void setPrixArt(int prixArt) {
        this.prixArt = prixArt;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    @Override
    public String toString() {
        return "Article{" +
                "idArticle=" + idArticle +
                ", nomArt='" + nomArt + '\'' +
                ", imgArt='" + imgArt + '\'' +
                ", nomConsole='" + nomConsole + '\'' +
                ", description='" + description + '\'' +
                ", quantArt=" + quantArt +
                ", prixArt=" + prixArt +
                ", tag='" + tag + '\'' +
                '}';
    }
}

