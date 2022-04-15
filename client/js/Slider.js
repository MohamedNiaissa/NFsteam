let slide = document.querySelector(".slider");
let prixFiltre = document.querySelector(".prixFiltre")

// slide.addEventListener('change',function(){
function filtrateProduct(){
    let prixCopie = document.querySelectorAll(".prixArt");

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

                let prixArticle = prixCopie[i].innerHTML.substring(0,prixCopie[i].innerHTML.length-1);
                
                if(slide.value.length == 3 ){
                    divCopie[i].style.display = "flex";
                }else if(slide.value.length == 1){
                    divCopie[i].style.display  = "none";
                }else if(prixArticle > slide.value ){
                    divCopie[i].style.display = "none";
                }else{
                    divCopie[i].style.display = "flex";
                }
            }
        }
        liste.length= 0;
    }
};


