let barreRech = document.querySelector('.recherche');
let searchGlass = document.querySelector('.search');
let searchlist = [];

searchGlass.addEventListener('click',function(){
    let httpRequest = new XMLHttpRequest();
    httpRequest.open('GET','http://localhost:8080/articles');
    httpRequest.send();
    httpRequest.onload= function() {
        liste.push(JSON.parse(httpRequest.responseText))
        let catalogue = document.getElementById("Product");
        let categorie = document.createElement("div");
        categorie.className = "categorie";
        catalogue.innerHTML = "";
        for (let i = liste[0].length - 1; i > -1; i--) {
            callTag(liste, i);
            if ((liste[0][i]['nomArt'].toLocaleLowerCase()).includes(barreRech.value.toLocaleLowerCase())) {
                if (localStorage.getItem("recherche") === "all" || localStorage.getItem("recherche") == null) {
                    categorie.innerHTML += '<div class="Copie div" id = "id' + liste[0][i]['nomArt'] + '">\n' +
                        '<a href="index.html" id="' + liste[0][i]['tag'] + i + '">' + liste[0][i]['tag'] + '</a>' +
                        '<img class="imgProduct" src="' + liste[0][i]['imgArt'] + '">\n' +
                        '<a href="produit.html" id="' + liste[0][i]['nomArt'] + '">' + liste[0][i]['nomArt'] + '</a>\n' +
                        '<p>' + liste[0][i]['prixArt'] + '€</p>\n' +
                        '</div>';
                } else {
                    if (liste[0][i]['tag'] === localStorage.getItem("recherche")) {
                        categorie.innerHTML += '<div class="Copie div">\n' +
                            '<a href="index.html" id="' + liste[0][i]['tag'] + i + '">' + liste[0][i]['tag'] + '</a>' +
                            '<img class="imgProduct" src="' + liste[0][i]['imgArt'] + '">\n' +
                            '<a href="produit.html" id="' + liste[0][i]['nomArt'] + '">' + liste[0][i]['nomArt'] + '</a>\n' +
                            '<p>' + liste[0][i]['prixArt'] + '€</p>\n' +
                            '</div>';
                    }
                }
            }
            catalogue.innerHTML = '<div class="categorie">' + categorie.innerHTML + '</div>';
        }
        for (let i = liste[0].length-1; i > -1; i--) {
            if (document.getElementById(liste[0][i]['nomArt'])) {
                document.getElementById(liste[0][i]['nomArt']).addEventListener('click', function () {
                    localStorage.setItem("nomprod", liste[0][i]['nomArt'])
                })
            }
            if (document.getElementById(liste[0][i]['tag']+i)) {
                document.getElementById(liste[0][i]['tag']+i).addEventListener('click', function () {
                    localStorage.setItem("recherche", liste[0][i]['tag'])
                })
            }
        }
    }
    /*let copie = document.querySelectorAll(".Copie");
    
    console.log(barreRech.value);
    console.log(copie)

    for(let i = 0;i<copie.length;i++){
        console.log(copie[i].id)
        let copieid = copie[i].id;
        if(copieid.substr(2).includes(barreRech.value)){
            console.log("********************")
            searchlist.push(copie[i])
            console.log("********************")
        }
    }

    console.log(searchlist);
    for(let i = 0;i < copie.length;i++){
        copie[i].remove();
    }

    let categorie = document.querySelector('.categorie')
    for(let i = 0;i < searchlist.length;i++){
        categorie.innerHTML += '<div class="Copie div">' + searchlist[i].innerHTML + "</div>"
    }
    searchlist = [];*/

})

