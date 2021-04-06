"use strict";
//varuables obtenidas del formulario
var formulario = document.getElementById("formulario");
var nombre = document.getElementById("nombre");
var apellidos = document.getElementById("apellido");
var rut = document.getElementById("rut");
var correo = document.getElementById("correo");
var telefono = document.getElementById("telefono");
var checks = document.getElementsByClassName("check");
var slider = document.getElementById("nivel");
var radio = document.getElementsByClassName("exp");
var texto = document.getElementById("texto");
//mensaje de alerta para los requisitos
var alerta = document.getElementById("alerta");
function requisitos() {
    if (checkrut() == true && checktel() == true && checkear() == true) {
        return true;
    }
    else {
        return false;
    }
}
formulario.addEventListener("submit", function (evento) {
    console.log(nombre.value + apellidos.value + rut.value + correo.value + telefono.value);
    if (requisitos() == false) {
        evento.preventDefault();
        return false;
    }
    else {
        alerta.innerHTML = "Hemos recibido sus datos, pronto nos estaremos comunicando con usted.";
        alerta.style.display = "block";
        formulario.style.display = "none";
        evento.preventDefault();
    }
});
function limpiarDatos() {
    nombre.value = "";
    apellidos.value = "";
    rut.value = "";
    correo.value = "";
    telefono.value = "";
    slider.value = "0";
    for (var index = 0; index < 6; index++) {
        checks[index].checked = false;
    }
    for (var index = 0; index < 5; index++) {
        radio[index].checked = false;
    }
    texto.value = "";
    document.documentElement.scrollTop = 0;
}
/* se cerciora de si ingreso un numero de telefono valid*/
function checktel() {
    var tel = telefono.value;
    if (tel.length != 9) {
        alert("El numero de telefono ");
        return false;
    }
    else {
        return true;
    }
}
//chechea el formato del rut
function checkrut() {
    var run = rut.value.length;
    // revisa que solo ingresen numeros antes del guion
    for (var i = 0; i <= run - 3; i++) {
        if (isNaN(rut.value[i]) == true) {
            alert("Ingresar el rut en formato 11111111-1");
            return false;
        }
    }
    //revisa si se ingreso un guion
    if (rut.value[run - 2] != "-") {
        alert("Ingresar el rut en formato 11111111-1");
        return false;
    }
    //revisa si se ingreso un numero o una K como digito verificador
    switch (rut.value[run - 1]) {
        case "0":
            break;
        case "1":
            break;
        case "2":
            break;
        case "3":
            break;
        case "4":
            break;
        case "5":
            break;
        case "6":
            break;
        case "7":
            break;
        case "8":
            break;
        case "9":
            break;
        case "k":
            break;
        case "K":
            break;
        default:
            alert("Ingresar el rut en formato 11111111-1");
            return false;
    }
    return true;
}
//comprobar si hay almenos una checkbox marcada
function checkear() {
    var flag = false;
    for (var index = 0; index < 6; index++)
        if (checks[index].checked == true) {
            flag = true;
            break;
        }
    if (flag == false) {
        alert("Debe seleccionar uno o mas lenguajes de programacion");
    }
    return flag;
}
