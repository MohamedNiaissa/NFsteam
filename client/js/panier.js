let prixtotal = 0
total = document.getElementById("Total")
console.log(total)
let produit = document.getElementsByClassName("prixproduit")
for(let i = 0;i < produit.length;i++){
    prixtotal += parseFloat(produit[i].innerHTML)
}
total.innerHTML = "Total : " + prixtotal + "€";