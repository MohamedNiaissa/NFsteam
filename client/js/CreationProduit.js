function stock(){
    let httpRequest = new XMLHttpRequest();
    httpRequest.open('POST','http://localhost:8080/articles/addart/'+document.getElementById('Titre').value+'/'+document.getElementById('Img').value+'/'+document.getElementById('Support').value+'/'+document.getElementById('Description').value+'/'+document.getElementById('Quantiten').value+'/'+document.getElementById('Prix').value+'/'+document.getElementById('Tag').value+'/');
    httpRequest.send();
    httpRequest.onload= function(){
        document.getElementById("sudbmitnew").innerHTML = "Produit ajouté";
    }
}

document.getElementById("sudbmitnew").addEventListener('click',stock());