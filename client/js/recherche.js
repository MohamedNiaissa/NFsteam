let barreRech = document.querySelector('.recherche');
let searchGlass = document.querySelector('.search');
let searchlist = [];

barreRech.addEventListener('click',function(){
    console.log(barreRech.value);

})

searchGlass.addEventListener('click',function(){
    let copie = document.querySelectorAll(".Copie");
    
    console.log(barreRech.value);
    console.log(copie)

    for(let i = 0;i<copie.length;i++){
        console.log(copie[i].id)
        let copieid = copie[i].id;
        if(barreRech.value.includes(copieid.substr(2))){
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
        categorie.innerHTML += searchlist[i].innerHTML
    


    }
    searchlist = [];

})

