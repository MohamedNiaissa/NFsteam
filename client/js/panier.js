let panier = document.getElementById("pan")
panier.innerHTML = "";
let montant;
let prixtotal = 0;
let datanum = 0;
let datasav = [];
function affichagepanier(){
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
                    document.getElementById("monnaie").innerHTML = "Vous avez " + data[i]["monnaie"] + "€ "
                    montant = data[i]["monnaie"];
                    let url = `http://localhost:8080/panier/${idUser}`;
                    let headers = {};
                    fetch(url, {
                        method: "GET",
                        mode: 'cors',
                        headers: headers
                    }).then((response) => {
                        return response.json().then((data2) => {
                            for (let j = 0; j < data2.length; j++) {
                                let url = `http://localhost:8080/articles/makePan/${data2[j]['idArticle']}`;
                                let headers = {};
                                fetch(url, {
                                    method: "GET",
                                    mode: 'cors',
                                    headers: headers
                                }).then((responseultime) => {
                                    return responseultime.json().then((data3) => {
                                        copie = document.createElement("div");
                                        copie.innerHTML = '<img class="imgProduct" src="' + data3['imgArt'] + '">\n' +
                                            '            <p class="prixproduit">' + data3["prixArt"] + '€</p>\n' +
                                            '            <h2>' + data3["nomArt"] + '</h2>\n' +
                                            '            <p id="' + datanum + '" class="clickable">Retirer du panier</p>'
                                        panier.innerHTML += '<div class="Copie" id="div">' + copie.innerHTML + '</div>\n'
                                        datasav.push(data3["idArticle"]);
                                        datanum++;
                                        total = document.getElementById("Total")
                                        let produit = document.getElementsByClassName("prixproduit")
                                        for (let i = 0; i < produit.length; i++) {
                                            prixtotal += parseFloat(produit[i].innerHTML)
                                        }
                                        total.innerHTML = "Total : " + prixtotal + "$";
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
const work = new affichagepanier();
work.then((MARCHE) =>{
    for (let i = 0; i < datanum; i++) {
        console.log(document.getElementById(i + ""));
        if (document.getElementById(i + "")) {
            document.getElementById(i + "").addEventListener('click', function () {
                let url = `http://localhost:8080/panier/retreat/${localStorage.getItem("nom")}/${datasav[i]['idArticle']}`;
                let headers = {};
                fetch(url, {
                    method: "GET",
                    mode: 'cors',
                    headers: headers
                }).then((response) => {
                    return response.json().then((data) => {
                        if (data) {
                            document.location.href = "../html/panier.html";
                        }
                    })
                })
            })
        }
    }
})
document.getElementById("achat").addEventListener('click',function () {
    let newmontant = montant-prixtotal;
    if (newmontant>0) {
        let url = `http://localhost:8080/users/updateusermonnaie/${localStorage.getItem("nom")}/${newmontant}`;
        let headers = {};
        fetch(url, {
            method: "POST",
            mode: 'cors',
            headers: headers
        }).then((response) => {
            return response.json().then((data) => {
                console.log(data);
                if (data) {
                    let url = `http://localhost:8080/panier/retreats/${localStorage.getItem("nom")}`;
                    console.log(url);
                    let headers = {};
                    fetch(url, {
                        method: "GET",
                        mode: 'cors',
                        headers: headers
                    }).then((response) => {
                        return response.json().then((data2) => {
                            console.log(data2);
                            if (data2) {
                                document.location.href = "../html/panier.html";
                            } else {
                                let url = `http://localhost:8080/users/updateusermonnaie/${localStorage.getItem("nom")}/${(montant)}`;
                                let headers = {};
                                fetch(url, {
                                    method: "POST",
                                    mode: 'cors',
                                    headers: headers
                                }).then((response) => {
                                    return response.json().then((data3) => {
                                        console.log(data3);
                                        if (data3){
                                            document.location.href = "../html/panier.html";
                                        }
                                        else
                                        {
                                            document.getElementById("achat").innerHTML = "une erreur est survenu, veuillez contactez le service technique";
                                        }
                                    })
                                })
                            }
                        })
                    })
                }
            })
        })
    }
})
