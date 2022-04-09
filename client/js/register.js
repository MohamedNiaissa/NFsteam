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

    console.log(dataUser)

    for(let key in dataUser){
        if(dataUser[key] === ""){
            nonValid()
            console.log('fdxfxfxdfxxdxx')
            break;
        }
    }
    if(verifChamp == true){
        let httpRequest = new XMLHttpRequest();

        // httpRequest.open('GET',`http://localhost:8080/users/adduser/${dataUser["nom"]}/${dataUser["mail"]}/${dataUser["mdp"]}`);
        // httpRequest.send();
        // httpRequest.onload= function(){
        //     console.log('ok send')
        // }
//         var xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function() {
//             if (this.readyState == 4 && this.status == 200) {
//                 document.getElementById("emo").innerHTML = alert(this.responseText);
//     }
//  };

//         xhttp.withCredentials = true;
//         xhttp.open("GET", `http://localhost:8080/users/adduser/${dataUser["nom"]}/${dataUser["mail"]}/${dataUser["mdp"]}/11`, true);
//         xhttp.setRequestHeader( 'Access-Control-Allow-Origin', 'http://localhost:5500/');
//         xhttp.send();
//  }

        let url = `http://localhost:8080/users/adduser/${dataUser["nom"]}/${dataUser["mail"]}/${dataUser["mdp"]}/${dataUser["monnaie"]}`;

        // localStorage.setItem("nom", dataUser["nom"])
        // localStorage.setItem("mail", dataUser["mail"])



        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'mode' : 'cors',
        //         'Access-Control-Allow-Origin': "*"
            
        // }, body: JSON.stringify(url)}).then((res) => console.log(res) );

        var headers = {}
        
        fetch(url, {
            method : "GET",
            mode: 'cors',
            headers: headers
        })
 
    }})

    document.body.addEventListener('dblclick',function(){
        localStorage.clear()
    })
