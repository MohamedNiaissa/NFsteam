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
        // if (!response.ok) {
        //     throw new Error(response.error)
        // }
        console.log(response.text)
        return response.json();
    }).then(data => {
        console.log(data)
    })
})