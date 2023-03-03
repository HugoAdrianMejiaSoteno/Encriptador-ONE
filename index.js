
function encriptar () {
  //Obtenemos el valor de input
  var frase = document.getElementById("textoEncriptado").value.toLowerCase();
  //Usar la funcion replace esta remplaza la letra e por la palabra enter
  /*
  Colocamos img porque 
  i signifa qye va a tomar letras mayusculas y minusculas
  m significa que toma en cuenta multiples lineas, en caso de que tengamos enter enter enter 
  g significa que tome en cuneta toda la linea o la oracio, osea sihay un espacio o algo no va a importar, esto va a agarrar toda la oracion
  */
  var textoEncriptado = frase.replace(/e/img, "enter");
  var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
  var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
  var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
  var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

  document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
  /*Esto es para que el boton se muestre en pantalla cuando se llame a la funcion encriptar*/
  document.getElementById("BotonCopiar").style.display = "show";
  document.getElementById("BotonCopiar").style.display = "inherit";
  document.getElementById("textoDesencriptado").style.display = "show";
  document.getElementById("textoDesencriptado").style.display = "inherit";

  document.getElementById("imagen").style.display = "none";
  document.getElementById("contenedor_subtitulo").style.display = "none";
  document.getElementById("contenedor_parrafo").style.display = "none";

}

function desencriptar () {
  /*Estaes la funcion para desincriptar, de echo se realizo igual que la anterior funcion, pero al reves, utilizando igual replace*/
  var frase = document.getElementById("textoEncriptado").value.toLowerCase();
  var textoEncriptado = frase.replace(/enter/img, "e");
  var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
  var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
  var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
  var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

  /*En esta parte insertamos el contenido de textoEncriptado en el html*/
  document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
} 

/*La funcion copiar del rograma, aqui utilixsmod una funcion para poder seleccionar el texto de la pantalla mediante un boton*/
function copiar (){
  var contenido = document.querySelector("#textoDesencriptado");
  contenido.select();
  document.execCommand("copy");
}