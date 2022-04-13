let slide = document.querySelector(".slider");
let prixFiltre = document.querySelector(".prixFiltre")

slide.addEventListener('change',function(){
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
                let prixArticle = prixCopie[i].innerHTML.substring(0,prixCopie[0].innerHTML.length-1);

                if(prixArticle > slide.value ){
                    divCopie[i].style.display = "none";
                }else{
                    divCopie[i].style.display = "flex";
                }
            }

        }
        liste.length= 0;
    }
});


