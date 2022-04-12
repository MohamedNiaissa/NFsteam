let btn_login = document.querySelector('.btn_login');
let headers = {};
let nom = document.querySelector("#idnomlog");
let mdp = document.querySelector("#idmdplog");

btn_login.addEventListener('click',function(){
    let nomlog = nom.value;
    let mdplog = mdp.value;
    console.log(nomlog)

    let url = `http://localhost:8080/users/login/${nomlog}/${mdplog}`;
    fetch(url, {
        method : "GET",
        mode: 'cors',
        headers: headers
    }).then((response) => {
        return response.json().then((data) => {
            try{
                localStorage.setItem("nom",data[0].nom);
                localStorage.setItem("mail",data[0].mail);
                localStorage.setItem("monnaie",data[0].monnaie);
            }catch(error){
                console.log("non");
            }
            if (localStorage.getItem("nom") === data[0].nom)
            {

            }
        })
    });
})