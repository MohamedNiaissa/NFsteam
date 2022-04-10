let supp = document.querySelector('.suppr');
let profilTitre = document.querySelector(".profilTitre");
let nomProfil = localStorage.getItem("nom");
profilTitre.innerHTML += " " + nomProfil;
let btn_nommodif = document.querySelector('.btn_nommodif')
let newnom = document.querySelector('#idnom');


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
    console.log(newnom)
    localStorage.setItem("nom",newnom.value)
    let url = `http://localhost:8080/users/updateusernom/${nomProfil}/${newnom.value}`;
    fetch(url, {
        method : "GET",
        mode: 'cors',
        headers: headers
    })
})