let nom = localStorage.getItem("nomprod");
let panier = [];
let headers = {};
function callAPI() {
    let url = `http://localhost:8080/articles/consult/${nom}`;
    fetch(url, {
        method: "GET",
        mode: 'cors',
        headers: headers
    }).then((response) => {
        return response.json().then((data) => {
            console.log(data);
            catalogue = document.getElementById("Product");
            categorie = document.createElement("div");
            categorie.className = "categorie";
            categorie.innerHTML += '<div class="inproduit" id="div">\n' +
                '<img class="imgProduit" src="' + data[0]['imgArt'] + '">\n' +
                '<p>' + data[0]['prixArt'] + '€</p>\n' +
                '<p>' + data[0]['nomArt'] + '</p>\n' +
                '<p>'+data[0]['description']+'</p>\n' +
                '<div id="div"><p class="clickable" id="panier">Ajouter au panier</p></div>' +
                '</div>';
                catalogue.innerHTML = '<div class="categorie">' + categorie.innerHTML + '\n' +
                '</div>';
            document.getElementById("panier").addEventListener("click", function ()
            {
                if (window.confirm("Le produit a bien été rajouté, souhaiter vous allez voir votre panier ?"))
                {
                    document.location.href="../html/panier.html";
                }
            })
        }).catch((err) => {
            console.log(err);
        })
    });

}


callAPI();