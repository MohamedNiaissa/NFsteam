let liste = [];
function callAPI(){
    let httpRequest = new XMLHttpRequest();
    httpRequest.open('GET','http://localhost:8080/articles');
    httpRequest.send();
    httpRequest.onload= function(){
        liste.push(JSON.parse(httpRequest.responseText))
        alert(liste[0])
        catalogue = document.getElementById("Product");
        categorie = document.createElement("div");
        categorie.className = "categorie";
        for (let i = liste[0].length-1; i > -1; i--) {
            categorie.innerHTML += '<div class="Copie" id="div">\n' +
                '<a href="">'+liste[0][i]['tag']+'</a>'+
                '<img class="imgProduct" src="'+liste[0][i]['imgArt']+'">\n' +
                '<p>'+liste[0][i]['nomArt']+'</p>\n' +
                '<p>'+liste[0][i]['description'].slice(0,20)+'</p>\n' +
                '</div>';
        }
        catalogue.innerHTML = '<div class="categorie">' + categorie.innerHTML + '</div>';
    }
    console.log("inside the .js file")
}

// document.body.addEventListener('click',callAPI());
