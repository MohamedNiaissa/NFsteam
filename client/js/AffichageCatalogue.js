let liste = [];
function callAPI(){
    let httpRequest = new XMLHttpRequest();
    httpRequest.open('GET','http://localhost:8080/articles');
    httpRequest.send();
    httpRequest.onload= function(){
        liste.push(JSON.parse(httpRequest.responseText))
        catalogue = document.getElementById("Product");
        categorie = document.createElement("div");
        categorie.className = "categorie";
        for (let i = liste[0].length-1; i > -1; i--) {
            if (localStorage.getItem("recherche") === "all" || localStorage.getItem("recherche") == null)
            {
                categorie.innerHTML += '<div class="Copie div">\n' +
                    '<a href="index.html" id="'+liste[0][i]['tag']+i+'">'+liste[0][i]['tag']+'</a>'+
                    '<img class="imgProduct" src="'+liste[0][i]['imgArt']+'">\n' +
                    '<a href="produit.html" id="'+liste[0][i]['nomArt']+'">'+liste[0][i]['nomArt']+'</a>\n' +
                    '<p>'+liste[0][i]['description'].slice(0,50)+'</p>\n' +
                    '</div>';
            }
            else
            {
                if (liste[0][i]['tag'] === localStorage.getItem("recherche"))
                {
                    categorie.innerHTML += '<div class="Copie div">\n' +
                        '<a href="index.html" id="'+liste[0][i]['tag']+'">'+liste[0][i]['tag']+'</a>'+
                        '<img class="imgProduct" src="'+liste[0][i]['imgArt']+'">\n' +
                        '<a href="produit.html" id="'+liste[0][i]['nomArt']+'">'+liste[0][i]['nomArt']+'</a>\n' +
                        '<p>'+liste[0][i]['description'].slice(0,50)+'</p>\n' +
                        '</div>';
                }
            }
        }
        catalogue.innerHTML = '<div class="categorie">' + categorie.innerHTML + '</div>';
        for (let i = liste[0].length-1; i > -1; i--) {
            document.getElementById(liste[0][i]['nomArt']).addEventListener('click', function () {
                localStorage.setItem("nomprod", liste[0][i]['nomArt'])
            })
            document.getElementById(liste[0][i]['tag']+i).addEventListener('click', function () {
                localStorage.setItem("recherche", liste[0][i]['tag'])
            })
        }
    }
}
// console.log(localStorage.getItem("nom"));
callAPI();

if(localStorage.getItem("nom") !== null){

    let conn = document.querySelector(".Log");
    conn.innerHTML = "Deconnexion";
    conn.setAttribute("href","."); // . -> reload la page
    conn.addEventListener('click',function(){localStorage.clear()})
    let profil = document.querySelector(".Regi");
    profil.innerHTML = "Profil";
    profil.setAttribute("href","profil.html");
}
