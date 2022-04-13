let panier = document.getElementById("pan")
panier.innerHTML = "";
function retraitPanier(idUser,idArticle) {
    let url = `http://localhost:8080/users`;
    let headers = {};
    fetch(url, {
        method: "GET",
        mode: 'cors',
        headers: headers
    }).then((response) => {
        return response.json().then((data) => {
            if(data)
            {
                /*document.location.href="../html/panier.html";*/
            }
        })
    })
}
function affichagepanier() {
    let url = `http://localhost:8080/users`;
    let headers = {};
    let idUser;
    fetch(url, {
        method: "GET",
        mode: 'cors',
        headers: headers
    }).then((response) => {
        return response.json().then((data) => {
            for (let i = 0; i < data.length; i++) {
                if (data[i]["nom"] === localStorage.getItem("nom")) {
                    idUser = data[i]["idUser"]
                    document.getElementById("actuelPrix").innerHTML = "Vous avez " + data[i]["monnaie"] + "€ "
                    document.getElementById("actuelPrix").className = "idUser"
                    document.getElementById("actuelPrix").id = data[i]["idUser"]
                    let url = `http://localhost:8080/panier/${idUser}`;
                    let headers = {};
                    fetch(url, {
                        method: "GET",
                        mode: 'cors',
                        headers: headers
                    }).then((response) => {
                        return response.json().then((data2) => {
                            for (let j = 0; j < data2.length; j++) {;
                                let url = `http://localhost:8080/articles/makePan/${data2[j]['idArticle']}`;
                                let headers = {};
                                fetch(url, {
                                    method: "GET",
                                    mode: 'cors',
                                    headers: headers
                                }).then((response) => {
                                    return response.json().then((data3) => {
                                        copie = document.createElement("div");
                                        copie.innerHTML = '<img class="imgProduct" src="' + data3[0]['imgArt'] + '">\n' +
                                            '            <p class="prixproduit">' + data3[0]["prixArt"] + '€</p>\n' +
                                            '            <h2>' + data3[0]["nomArt"] + '</h2>\n' +
                                            '            <p id="'+data3[0]['idArticle']+'" class="clickable">Retirer du panier</p>'
                                        panier.innerHTML += '<div class="Copie" id="div">'+copie.innerHTML+'</div>\n'
                                        document.getElementById(data3[0]['idArticle']).addEventListener('click',retraitPanier(data[i]['idUser'],data3[0]['idArticle']))
                                        let prixtotal = 0
                                        total = document.getElementById("Total")
                                        let produit = document.getElementsByClassName("prixproduit")
                                        for(let i = 0;i < produit.length;i++){
                                            prixtotal += parseFloat(produit[i].innerHTML)
                                        }
                                        total.innerHTML = "Total : " + prixtotal + "€";
                                    })
                                })
                            }
                        })
                    })
                }
            }
        })
    })
}
affichagepanier();
