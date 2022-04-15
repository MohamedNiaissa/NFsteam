let nom = localStorage.getItem("nomprod");
let headers = {};
function callAPI() {
    let url = `http://localhost:8080/articles/consult/${nom}`;
    fetch(url, {
        method: "GET",
        mode: 'cors',
        headers: headers
    }).then((response) => {
        return response.json().then((data) => {
            document.getElementById("titrepage").innerHTML = "NFsTeam - " + data[0]['nomArt'];
            catalogue = document.getElementById("Product");
            categorie = document.createElement("div");
            categorie.className = "categorie";
            categorie.innerHTML += '<div class="inproduit" id="div">\n' +
                '<img class="imgProduit" id="prod" src="' + data[0]['imgArt'] + '">\n' +
                '<p>' + data[0]['prixArt'] + '$</p>\n' +
                '<p>' + data[0]['nomArt'] + '</p>\n' +
                '<p>'+data[0]['description']+'</p>\n' +
                '<div id="div"><p class="clickable" id="panier">Ajouter au panier</p></div>' +
                '</div>';
                catalogue.innerHTML = '<div class="categorie">' + categorie.innerHTML + '\n' +
                '</div>';
            document.getElementById("panier").addEventListener('click', function () {
                if (localStorage.getItem("nom") == null)
                {
                    document.location.href="../html/Login.html";
                }
                else
                {
                    let url =  `http://localhost:8080/panier/newCom/${localStorage.getItem("nom")}/${localStorage.getItem("nomprod")}`;
                    let headers = {};
                    fetch(url, {
                        method : "GET",
                        mode: 'cors',
                        headers: headers
                    }).then((response) => {
                        return response.json().then((data) => {
                            if (data){
                                if (window.confirm("Le produit a bien été rajouté, souhaiter vous allez voir votre panier ?"))
                                {
                                    document.location.href="../html/panier.html";
                                }
                            }
                            else
                            {
                                window.alert("Le produit n'a pas été rajouté");
                            }
                        })
                    })
                }
            })
        }).catch((err) => {
            console.log(err);
        })
    });

}


callAPI();