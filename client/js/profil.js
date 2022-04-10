let supp = document.querySelector('.suppr');
let profilTitre = document.querySelector(".profilTitre");
let nomProfil = localStorage.getItem("nom");
profilTitre.innerHTML += " " + nomProfil;

supp.addEventListener("click",function(){
    var headers = {}
    let url = `http://localhost:8080/users/removeuser/${nomProfil}`
    fetch(url, {
        method : "GET",
        mode: 'cors',
        headers: headers
    })


    localStorage.clear()
})