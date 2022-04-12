if(localStorage.getItem("nom") !== null){
    let conn = document.querySelector(".Log");
    conn.innerHTML = "Deconnexion";
    conn.setAttribute("href","index.html");
    conn.addEventListener('click',function(){localStorage.clear()})
    pan = document.createElement("a")
    pan.innerHTML = "Panier";
    pan.className = "LogRegi";
    document.getElementsByClassName("Compte")[0].appendChild(pan);
    let profil = document.querySelector(".Regi");
    profil.innerHTML = "Profil";
    profil.setAttribute("href","profil.html");
}