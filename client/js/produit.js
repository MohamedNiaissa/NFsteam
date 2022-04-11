document.getElementById("panier").addEventListener("click", function ()
{
    if (window.confirm("Le produit a bien été rajouté, souhaiter vous allez voir votre panier ?"))
    {
        document.location.href="../html/panier.html";
    }
})
let liste = [];
let nom = "fifa21";
function callAPI(){
    let httpRequest = new XMLHttpRequest();
    alert('http://localhost:8080/articles/consult/'+nom);
    httpRequest.open('GET','http://localhost:8080/articles/consult/'+nom);
    httpRequest.send();
    httpRequest.onload= function(){
        liste.push(JSON.parse(httpRequest.responseText))
        alert(liste[0]);
        /*catalogue = document.getElementById("Product");
        categorie = document.createElement("div");
        categorie.className = "categorie";
        for (let i = liste[0].length-1; i > -1; i--) {
            categorie.innerHTML += '<div class="inproduit" id="div">\n' +
                '<img class="imgProduit" src="'+liste[0][i]['imgArt']+'">'+
                '<p>'+liste[0][i]['Prix']+'</p>'
                '</div>';
        }
        catalogue.innerHTML = '<div class="categorie">' + categorie.innerHTML + '</div>';*/
    }
}
callAPI();