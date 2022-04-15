let titre = document.getElementById('Titre');
let img = document.getElementById('Img');
let support = document.getElementById('Support');
let desc = document.getElementById('Description');
let quantiten = document.getElementById('Quantiten');
let prix = document.getElementById('Prix');
let tag = document.getElementById('Tag');
document.querySelector(".sudbmitnew").addEventListener('click', function(){
        let slash = 0;
        for (let i = 0; i < img.value.length; i++) {
                if(img.value[i]=="/"){
                        slash++;
                }
        }
        while(slash >= 0){
                img.value = (img.value).replace('/',';');
                slash--;
        }
        let url =  `http://localhost:8080/articles/addart/${titre.value}/${img.value}/${support.value}/${desc.value}/${quantiten.value}/${prix.value}/${tag.value}`;
        let headers = {};
        fetch(url, {
            method : "POST",
            mode: 'cors',
            headers: headers
        })
}
);