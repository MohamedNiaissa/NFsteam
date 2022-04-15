let btnRegister = document.querySelector('.btn_register');
let idnom = document.querySelector('#idnom');
let idmail = document.querySelector('#idmail');
let idmdp = document.querySelector('#idmdp');

let dataUser = {};
let verifChamp = true;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


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

async function nonValid(){
    popup
}

function valid(){
    console.log("bien")
}
btnRegister.addEventListener('click',function(){

    dataUser["nom"] = idnom.value;
    dataUser["mail"] = idmail.value;
    dataUser["mdp"] = idmdp.value;
    dataUser["monnaie"] = idmonnaie.value;

    for(let key in dataUser){
        if(dataUser[key] === ""){
            popup(" Veuillez bien remplir le formulaire  ", "purple")
            break;
        }
    }
    if(verifChamp == true){


        let url = `http://localhost:8080/users/adduser/${dataUser["nom"]}/${dataUser["mail"]}/${dataUser["mdp"]}/${dataUser["monnaie"]}`;

        localStorage.setItem("nom", dataUser["nom"])
        localStorage.setItem("mail", dataUser["mail"])
        localStorage.setItem("monnaie", dataUser["monnaie"])

        var headers = {}
        
        fetch(url, {
            method : "PUT",
            mode: 'cors',
            headers: headers
        })
        document.location.href="../html/index.html";
    }})

    document.body.addEventListener('dblclick',function(){
        localStorage.clear()
    })
