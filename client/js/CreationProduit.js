let titre = document.getElementById('Titre');
let img = document.getElementById('Img');
let support = document.getElementById('Support');
let desc = document.getElementById('Description');
let quantiten = document.getElementById('Quantiten');
let prix = document.getElementById('Prix');
let tag = document.getElementById('Tag');
let btn_suppr = document.querySelector('.btn_suppr');



document.querySelector(".sudbmitnew").addEventListener('click', function(){
    let article  = {
        "nomArt": titre.value,
        "imgArt": img.value ,
        "nomConsole": support.value,
        "description": desc.value, 
        "quantArt": parseInt(quantiten.value),
        "prixArt": parseInt(prix.value),
        "tag": tag.value 
    }

    let url =  `http://localhost:8080/articles/addart`;
        let headers = { 'Content-Type': 'application/json' };
        fetch(url, {
            method : "PUT",
            mode: 'cors',
            headers: headers,
            body : JSON.stringify(article)
        })
}
);


btn_suppr.addEventListener('click',function(){
    let produit = document.querySelector('.produitSuppr').value
    let url = `http://localhost:8080/articles/deleteart/${produit}`;
    let headers = {};
    fetch(url, {
        method : "DELETE",
        mode: 'cors',
        headers: headers,
    })
})