let btn_login = document.querySelector('.btn_login');
let headers = {};
let nom = document.querySelector("#idnomlog");
let mdp = document.querySelector("#idmdplog");

function popup(text,color){
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function transition(){
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
    div.style.background = color;
    p.textContent = text;
    document.body.appendChild(div);
    div.appendChild(p);

    const d = div.style;
    d.position = "absolute"; d.left = "100%"; d.top = "14%";
    d.width = "300px"; d.textAlign = "center"; d.borderRadius = "20px"; 
    d.padding = "10px"; d.transition = "all 1s ease";
    p.style.color = "white"; p.style.fontSize = "22px";
    
    transition();
    eraseNotif()
}

btn_login.addEventListener('click',function(){
    let nomlog = nom.value;
    let mdplog = mdp.value;
    console.log(nomlog)

    let url = `http://localhost:8080/users/login/${nomlog}/${mdplog}`;

    fetch(url, {
        method : "POST",
        mode: 'cors',
        headers: headers
    }).then((response) => {
        return response.json().then((data) => {
            try{
                localStorage.setItem("nom",data[0].nom);
                localStorage.setItem("mail",data[0].mail);
                localStorage.setItem("monnaie",data[0].monnaie);
                if (localStorage.getItem("nom") === data[0].nom){
                    document.location.href="../html/index.html";
                }
            }catch(error){
            }
            if (localStorage.getItem("nom") === data[0].nom)
            {
                document.location.href="../html/index.html";
            }else{
                popup("Erreur dans le remplissage des champs","red")

            }
        })
    });
})