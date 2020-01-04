"use strict";
function inserer(num) {
    return document.getElementsByClassName("resultat")[0].value = document.getElementsByClassName("resultat")[0].value + num;
}
function calcul() {
    return document.getElementsByClassName("resultat")[0].value = eval(document.getElementsByClassName("resultat")[0].value);
}
function del() {
    return document.getElementsByClassName("resultat")[0].value = "";
}
