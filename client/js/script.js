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
