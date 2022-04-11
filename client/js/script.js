
if(localStorage.getItem("nom") !== null){

    let conn = document.querySelector(".Log");
    conn.innerHTML = "Deconnexion";
    conn.setAttribute("href","."); // . -> reload la page
    conn.addEventListener('click',function(){localStorage.clear()})
    let profil = document.querySelector(".Regi");
    profil.innerHTML = "Profil";
    profil.setAttribute("href","profil.html");
}