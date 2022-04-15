if(localStorage.getItem("nom") !== null){
    let conn = document.querySelector(".Log");
    conn.innerHTML = "Deconnexion";
    conn.setAttribute("href","index.html");
    conn.addEventListener('click',function(){localStorage.clear()})
    pan = document.createElement("a")
    pan.innerHTML = "Panier";
    pan.className = "LogRegi";
    pan.setAttribute("href","panier.html");
    document.getElementsByClassName("Compte")[0].appendChild(pan);
    let profil = document.querySelector(".Regi");
    profil.innerHTML = "Profil";
    profil.setAttribute("href","profil.html");

    conn.addEventListener('click',function(){
        console.log('pop')
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        
        async function  transition(){
            await sleep (500);
            div.style.left = "78%";
        }
    
        async function eraseNotif() {
            await sleep(5000);
            div.style.opacity = "0";
            await sleep(1000);
            div.remove();
        }
        
        const div = document.createElement('div');
        const p = document.createElement('p');
        div.style.background = "green";
        p.textContent = "A bientôt ! ";
        document.body.appendChild(div);
        div.appendChild(p);
    
        const d = div.style;
        d.position = "absolute"; d.left = "100%"; d.top = "14%";
        d.width = "300px"; d.textAlign = "center"; d.borderRadius = "20px"; 
        d.padding = "10px"; d.transition = "all 1s ease";
        p.style.color = "white"; p.style.fontSize = "22px";
        
        transition();
        eraseNotif()
    })
    
}