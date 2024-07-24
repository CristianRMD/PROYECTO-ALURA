let texto1 = document.getElementById("btn_copiar");
texto1.style.display = "none";

function copiar() {
  var campoTemporal = document.createElement("textarea");
  campoTemporal.value = document.getElementById("texto_encriptado").innerText;
  document.body.appendChild(campoTemporal);
  campoTemporal.select();
  document.execCommand("copy");
  document.body.removeChild(campoTemporal);
 
}

function encriptar() {
  borrar();
texto1.style.display = "block";

  let input = document.getElementById("textInput").value;
   let nuevoTexto = "";
  for (var i = 0; i < input.length; i++) {
    switch (input[i]) {
      case 'a':
        nuevoTexto =nuevoTexto+"ai";
        break;
      case 'e':
        nuevoTexto =nuevoTexto+"enter";
        break;
      case 'i': 
        nuevoTexto =nuevoTexto+"imes";
        break;
      case 'o':
        nuevoTexto =nuevoTexto+"ober";
        break;
      case 'u':
        nuevoTexto =nuevoTexto+"ufat";
        break;
      default: {
        nuevoTexto =nuevoTexto+input[i];
      }
  }
  
}
let textEncriptado = document.getElementById("texto_encriptado");
    textEncriptado.innerHTML= nuevoTexto;
    input = document.getElementById("textInput").value=""
}

function desencriptar(){

  var input = document.getElementById("textInput").value;
  var textEncriptado = document.getElementById("texto_encriptado");
  textEncriptado.innerHTML= desencriptar_texto(input);

}

function desencriptar_texto(textoEncriptado) {
  let textoDesencriptado = textoEncriptado;
  
  textoDesencriptado = textoDesencriptado.replace(/ai/g, 'a');
  textoDesencriptado = textoDesencriptado.replace(/enter/g, 'e');
  textoDesencriptado = textoDesencriptado.replace(/imes/g, 'i');
  textoDesencriptado = textoDesencriptado.replace(/ober/g, 'o');
  textoDesencriptado = textoDesencriptado.replace(/ufat/g, 'u');
  
  return textoDesencriptado;
}

function borrar(){
  let texto = document.getElementById("kelly");
  texto.style.display = "none";
}



