



let btn_modif_nom = document.querySelector('.btn_modif_nom');
let btn_modif_desc = document.querySelector('.btn_modif_desc');
let btn_modif_support = document.querySelector('.btn_modif_support');
let btn_modif_tag = document.querySelector('.btn_modif_tag');
let btn_modif_prix = document.querySelector('.btn_modif_prix');
let btn_modif_quant = document.querySelector('.btn_modif_quant');
let btn_modif_img = document.querySelector('.btn_modif_img');

let btn_modif = document.querySelectorAll('.btn_modif');

btn_modif_nom.addEventListener('click',function(){
    let nomVal = document.querySelector('.nomVal').value;
    let nomModifVal = document.querySelector('.nomModifVal').value;

    let url = `http://localhost:8080/articles/updateartnom/${nomVal}/${nomModifVal}`;
    let headers = {};

    fetch(url, {
        method : "POST",
        mode: 'cors',
        headers: headers
    })

})

btn_modif_desc.addEventListener('click',function(){
    let nomVal = document.querySelector('.nomVal').value;
    let descVal = document.querySelector('.descVal').value;

    let url = `http://localhost:8080/articles/updateartdesc/${nomVal}/${descVal}`;
    let headers = {};

    fetch(url, {
        method : "POST",
        mode: 'cors',
        headers: headers
    })

})

btn_modif_tag.addEventListener('click',function(){
    let nomVal = document.querySelector('.nomVal').value;
    let tagVal = document.querySelector('.tagVal').value;

    let url = `http://localhost:8080/articles/updatearttag/${nomVal}/${tagVal}`;
    let headers = {};

    fetch(url, {
        method : "POST",
        mode: 'cors',
        headers: headers
    })

})

btn_modif_quant.addEventListener('click',function(){
    let nomVal = document.querySelector('.nomVal').value;
    let quantVal = document.querySelector('.quantVal').value;

    let url = `http://localhost:8080/articles/updateartquant/${nomVal}/${quantVal}`;
    let headers = {};

    fetch(url, {
        method : "POST",
        mode: 'cors',
        headers: headers
    })

})

btn_modif_img.addEventListener('click',function(){
    let nomVal = document.querySelector('.nomVal').value;
    let imgVal = document.querySelector('.imgVal').value;

    let url = `http://localhost:8080/articles/updateartimg/${nomVal}/${imgVal}`;
    let headers = {};

    fetch(url, {
        method : "POST",
        mode: 'cors',
        headers: headers
    })

})


btn_modif_support.addEventListener('click',function(){
    let nomVal = document.querySelector('.nomVal').value;
    let suppVal = document.querySelector('.suppVal').value;

    let url = `http://localhost:8080/articles/updateartsupp/${nomVal}/${suppVal}`;
    let headers = {};

    fetch(url, {
        method : "POST",
        mode: 'cors',
        headers: headers
    })
})


btn_modif_prix.addEventListener('click',function(){
    let nomVal = document.querySelector('.nomVal').value;
    let prixVal = document.querySelector('.prixVal').value;

    let url = `http://localhost:8080/articles/updateartprix/${nomVal}/${prixVal}`;
    let headers = {};

    fetch(url, {
        method : "POST",
        mode: 'cors',
        headers: headers
    })
})







