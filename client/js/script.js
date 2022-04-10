function callAPI(){
    let liste = [];
    let httpRequest = new XMLHttpRequest();
    httpRequest.open('GET','http://localhost:8080/users');
    httpRequest.send();
    httpRequest.onload= function(){
        alert(httpRequest.responseText);
        liste.push(httpRequest.responseText)
        alert(liste[0])
    }
    console.log("inside the .js file")
}
// console.log(localStorage.getItem("nom"));
// document.body.addEventListener('click',callAPI());

if(localStorage.getItem("nom") !== null){

    let conn = document.querySelector(".Log");
    conn.innerHTML = "Deconnexion";
    conn.setAttribute("href","."); // . -> reload la page
    conn.addEventListener('click',function(){localStorage.clear()})
    let profil = document.querySelector(".Regi");
    profil.innerHTML = "Profil";
    profil.setAttribute("href","profil.html");
}
