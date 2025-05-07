let inputText = document.getElementById('text');
let bouton = document.getElementById('ajouter');
let list = document.getElementById('list');

function ajouter(){
    let plus = document.createElement('li');    //on cree li
    plus.innerHTML += inputText.value;  
    document.getElementById('list').appendChild(plus);  //on rajoute a la liste
    let poubelle = document.createElement('i'); //on cree une balise i
    poubelle.classList.add('fa-solid'); //on ajoute une classe a i
    poubelle.classList.add('fa-trash'); //on ajoute une classe a i
    poubelle.addEventListener('click', function(){ plus.remove(); });
    plus.appendChild(poubelle);
}
bouton.addEventListener('click', ajouter);
