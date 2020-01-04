
function inserer(num): number{
    return document.getElementsByClassName("resultat")[0].value=document.getElementsByClassName("resultat")[0].value+num
}

function calcul(): number{
    return document.getElementsByClassName("resultat")[0].value=eval(document.getElementsByClassName("resultat")[0].value); 
}

function del(): string{
    return document.getElementsByClassName("resultat")[0].value=""
}