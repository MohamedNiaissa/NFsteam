let supp = document.querySelector('.suppr');
let profilTitre = document.querySelector(".profilTitre");
let nomProfil = localStorage.getItem("nom");
profilTitre.innerHTML += " " + nomProfil;
let btn_nommodif = document.querySelector('.btn_nommodif')
let btn_modifmonnaie = document.querySelector('.btn_modifmonnaie')
let btn_modifmail = document.querySelector('.btn_mailmodif')
let btn_modifmdp = document.querySelector('.btn_mdpmodif')
let newnom = document.querySelector('#idnommodif');
let newMonnaie = document.querySelector('#idmonnaiemodif');
let newMail = document.querySelector('#idmailmodif');
let newMdp = document.querySelector('#idmdpmodif');


let headers = {}

supp.addEventListener("click",function(){
    let url = `http://localhost:8080/users/removeuser/${nomProfil}`
    fetch(url, {
        method : "GET",
        mode: 'cors',
        headers: headers
    })
    
    localStorage.clear()
})

btn_nommodif.addEventListener('click',function(){
    console.log(nomProfil);
    let newN = newnom.value;
    console.log(newN);
    localStorage.setItem("nom",newnom.value)
    let url = `http://localhost:8080/users/updateusernom/${nomProfil}/${newN}`;
    fetch(url, {
        method : "GET",
        mode: 'cors',
        headers: headers
    })
})

btn_modifmonnaie.addEventListener('click',function(){
    console.log(nomProfil);
    let newM = newMonnaie.value;

    let url = `http://localhost:8080/users/updateusermonnaie/${nomProfil}/${newM}`;
    fetch(url, {
        method : "GET",
        mode: 'cors',
        headers: headers
    })
})


btn_modifmail.addEventListener('click',function(){
    let newM = newMail.value;

    let url = `http://localhost:8080/users/updateusermail/${nomProfil}/${newM}`;
    fetch(url, {
        method : "GET",
        mode: 'cors',
        headers: headers
    })
})


btn_modifmdp.addEventListener('click',function(){
    let newM = newMdp.value;

    let url = `http://localhost:8080/users/updateusermdp/${nomProfil}/${newM}`;
    fetch(url, {
        method : "GET",
        mode: 'cors',
        headers: headers
    })
})
