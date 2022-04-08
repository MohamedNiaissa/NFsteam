function callAPI(){
    let httpRequest = new XMLHttpRequest();
    httpRequest.open('GET','http://localhost:8080/users');
    httpRequest.send();
    httpRequest.onload= function(){
        alert(httpRequest.responseText);
    }
    console.log("inside the .js file")
}

document.body.addEventListener('click',callAPI());
