let genre = 'femme';
document.querySelector('#myform').onsubmit=function(e){
    e.preventDefault();
    if(document.querySelector('#homme').checked)genre = 'homme';
    let t =document.querySelector('#taille').value ;
    let p =document.querySelector('#poids').value ;
    let mc = p / ((t/100)**2); 
    let result = document.querySelector('#result');
    result.innerHTML=`Vous êtes ${genre}, et votre IMC est: ${mc.toFixed(2)}`;
    result.classList.remove('d-none');

};