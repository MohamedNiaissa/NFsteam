let btnRegister = document.querySelector('.btn_register');
let idnom = document.querySelector('#idnom');
let idmail = document.querySelector('#idmail');
let idmdp = document.querySelector('#idmdp');

let dataUser = {};
let verifChamp = true;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function nonValid(){
    let spanErr = document.createElement('span');
    document.body.appendChild(spanErr);
    spanErr.innerHTML = "Veuillez remplir tout les champs du formulaire";
    spanErr.classList.add("errormsg");
    await sleep(2000);
    spanErr.style.opacity = 0;
    spanErr.remove;
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
            nonValid()
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
        }).then((response) => {
            return response.json().then((data) => {
                document.location.href="../html/index.html";
            })
        })
    }})

    document.body.addEventListener('dblclick',function(){
        localStorage.clear()
    })
