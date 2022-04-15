let titre = document.getElementById('Titre');
let img = document.getElementById('Img');
let support = document.getElementById('Support');
let desc = document.getElementById('Description');
let quantiten = document.getElementById('Quantiten');
let prix = document.getElementById('Prix');
let tag = document.getElementById('Tag');


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

    console.log(article)
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