let liste = [];
let listetag= [];
function callTag(list, i) {
    let verif = 0;
    for (let j = 0; j < listetag.length; j++) {
        if (listetag[j] == list[0][i]['tag'])
        {
            verif++;
        }
    }
    if (verif == 0){
        listetag.push(list[0][i]['tag'])
    }
}
function callAPI(){
    let httpRequest = new XMLHttpRequest();
    httpRequest.open('GET','http://localhost:8080/articles');
    httpRequest.send();
    httpRequest.onload= function(){
        liste.push(JSON.parse(httpRequest.responseText))
        let catalogue = document.getElementById("Product");
        let categorie = document.createElement("div");
        categorie.className = "categorie";
        for (let i = liste[0].length-1; i > -1; i--) {
            callTag(liste,i);
            if (localStorage.getItem("recherche") === "all" || localStorage.getItem("recherche") == null)
            {
                categorie.innerHTML += '<div class="Copie div" id = "id'+liste[0][i]['nomArt']+'">\n' +
                    '<a href="index.html" class="clickable" id="'+liste[0][i]['tag']+i+'">'+liste[0][i]['tag']+'</a>'+
                    '<img class="imgProduct" src="'+liste[0][i]['imgArt']+'">\n' +
                    '<a href="produit.html" class="clickable" id="'+liste[0][i]['nomArt']+'">'+liste[0][i]['nomArt']+'</a>\n' +
                    '<p class = "prixArt" >'+liste[0][i]['prixArt']+'$</p>\n' +
                    '</div>';
            }
            else
            {
                if (liste[0][i]['tag'] === localStorage.getItem("recherche"))
                {
                    categorie.innerHTML += '<div class="Copie div">\n' +
                        '<a href="index.html" class="clickable" id="'+liste[0][i]['tag']+i+'">'+liste[0][i]['tag']+'</a>'+
                        '<img class="imgProduct" src="'+liste[0][i]['imgArt']+'">\n' +
                        '<a href="produit.html" class="clickable" id="'+liste[0][i]['nomArt']+'">'+liste[0][i]['nomArt']+'</a>\n' +
                        '<p class = "prixArt">'+liste[0][i]['prixArt']+'$</p>\n' +
                        '</div>';
                }
            }
        }
        catalogue.innerHTML = '<div class="categorie">' + categorie.innerHTML + '</div>';
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
        choixtag = document.getElementById("taglist");
        choixtag.innerHTML = "";
        for (let i = 0; i < listetag.length; i++) {
            newtag = document.createElement("li");
            if (listetag[i] === localStorage.getItem("recherche")){
                newtag.innerHTML = '<a href="" class="clickable active" id="'+listetag[i]+'">'+listetag[i]+'</a>'
            }
            else
            {
                newtag.innerHTML = '<a href="" class="clickable" id="'+listetag[i]+'">'+listetag[i]+'</a>'
            }
            choixtag.appendChild(newtag);
        }
        for (let i = 0; i < listetag.length; i++) {
            if (listetag[i] === localStorage.getItem("recherche")){
                document.getElementById(listetag[i]).addEventListener('click', function () {
                    localStorage.setItem("recherche", "all");
                })
            }
            else
            {
                document.getElementById(listetag[i]).addEventListener('click', function () {
                    localStorage.setItem("recherche", listetag[i]);
                })
            }
        }
    }
}
// console.log(localStorage.getItem("nom"));
callAPI();
