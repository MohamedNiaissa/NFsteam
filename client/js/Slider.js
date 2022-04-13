let slide = document.querySelector(".slider");
let prixFiltre = document.querySelector(".prixFiltre")

slide.addEventListener('change',function(){
    let divCopie = document.querySelectorAll(".Copie")

    let categorie = document.querySelector(".categorie");

    prixFiltre.innerHTML = slide.value+" $";
    localStorage.setItem("prixFilt",slide.value);

    if(prixFiltre !== null){
        let httpRequest = new XMLHttpRequest();
        httpRequest.open('GET','http://localhost:8080/articles');
        httpRequest.send();
        httpRequest.onload= function(){
            liste.push(JSON.parse(httpRequest.responseText))

            for(let i = 0;i < divCopie.length; i++){
                divCopie[i].style.display = "none";
            }

            for(let i = 0;i < liste[0].length; i++){
                let currentElem = liste[0][i];
                console.log(liste[0][i])
                if(liste[0][i].prixArt <= slide.value){
                    let divelem = document.createElement("div");
                    divelem.className = "Copie";
                    divelem.className += " div";
                    divelem.id = "id"+liste[0][i].nomArt;
                    categorie.appendChild(divelem)

                    let lienelemTag = document.createElement("a");
                    lienelemTag.className = "clickable";
                    lienelemTag.innerHTML = currentElem.tag;

                    let imgelem = document.createElement('img');
                    imgelem.setAttribute('src',currentElem.imgArt);
                    imgelem.className = 'imgProduct';


                    let lienelem = document.createElement("a");
                    lienelem.className = "clickable";
                    lienelem.innerHTML = currentElem.tag;
                    lienelem.setAttribute("href","produit.html")
                    lienelem.id = currentElem.nomArt;
                    lienelem.innerHTML = currentElem.nomArt;

                    let paraPrix = document.createElement('p');
                    paraPrix.innerHTML = currentElem.prixArt + "$";

                    divelem.appendChild(lienelemTag);
                    divelem.appendChild(imgelem);
                    divelem.appendChild(lienelem);
                    divelem.appendChild(paraPrix);
                }
                let elemdiv = document.querySelectorAll('div');
                for(let i= 0; i<elemdiv.length;i++){
                    elemdiv[i].remove;
                }
            }
        }
        liste.length= 0;
    }
});


