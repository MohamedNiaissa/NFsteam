let slide = document.querySelector(".slider");
let prixFiltre = document.querySelector(".prixFiltre")


slide.addEventListener('change',function(){
    let categorie = document.querySelector(".categorie");

    prixFiltre.innerHTML = slide.value+" $";
    localStorage.setItem("prixFilt",slide.value);

    if(prixFiltre !== null){
        let httpRequest = new XMLHttpRequest();
        httpRequest.open('GET','http://localhost:8080/articles');
        httpRequest.send();
        httpRequest.onload= function(){
            liste.push(JSON.parse(httpRequest.responseText))
    
            for(let i = 0;i < liste[0].length; i++){
                console.log(liste[0][i].prixArt)



                if(liste[0][i].prixArt <= slide.value){

                }else{
                    let id = "id"+liste[0][i].nomArt;
                    console.log(id)
                    document.querySelector(id).remove;
                    liste[0].remove(i);

                }
            }
        }
        liste.length= 0;
    }
});


