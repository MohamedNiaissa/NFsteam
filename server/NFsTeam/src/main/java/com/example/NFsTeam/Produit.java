package com.coding.models;

public class Produit {
    private int idProduit;
    private String Titre;
    private String Description;
    private float Prix;
    private int Quantité;
    public String Image;
    public int getIdProduit() {return idProduit;}
    public void setIdProduit(int idProduit) {
        this.idProduit = idProduit;
    }
    public String getTitre() {
        return Titre;
    }
    public void setTitre(String Titre) {
        this.Titre = Titre;
    }
    public String getDescription() {
        return Description;
    }
    public void setDescription(String Description) {
        this.Description = Description;
    }
    public int getQuantité() {
        return Quantité;
    }
    public void setQuantité(int Quantité) {
        this.Quantité = Quantité;
    }
    public String getImage() {
        return Image;
    }
    public void setImage(String Image) {
        this.Image = Image;
    }
    public float getPrix() { return Prix}
    public void setPrix(float Prix) { this.Prix = Prix}

}
