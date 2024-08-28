const botonEncriptar = document.querySelector(".btn-encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");
const munieco = document.querySelector(".contenedor-munieco");
const contenedorParrafo = document.querySelector(".contenedor-parrafo");
const resultadoTexto = document.querySelector(".texto-resultado");
const btnCopiar = document.querySelector(".btn-copiar");

botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);
btnCopiar.addEventListener("click", copiarTexto);

function encriptar() {
  ocultarContenidoInicial();
  const texto = obtenerTexto();
  resultadoTexto.textContent = encriptarTexto(texto);
  mostrarResultado();
}

function desencriptar() {
  ocultarContenidoInicial();
  const texto = obtenerTexto();
  resultadoTexto.textContent = desencriptarTexto(texto);
  mostrarResultado();
}

function obtenerTexto() {
  const cajaTexto = document.querySelector(".caja-texto");
  return cajaTexto.value;
}

function ocultarContenidoInicial() {
  munieco.classList.add("ocultar");
  contenedorParrafo.classList.add("ocultar");
}

function mostrarResultado() {
  resultadoTexto.parentElement.style.display = "flex";
}

function copiarTexto() {
  const contenido = resultadoTexto.textContent;
  navigator.clipboard
    .writeText(contenido)
    .then(() => console.log("Texto copiado al portapapeles"))
    .catch((err) => console.error("Error al copiar el texto: ", err));
}

function encriptarTexto(texto) {
  let textoEncriptado = "";
  for (let i = 0; i < texto.length; i++) {
    switch (texto[i]) {
      case "a":
        textoEncriptado += "ai";
        break;
      case "e":
        textoEncriptado += "enter";
        break;
      case "i":
        textoEncriptado += "imes";
        break;
      case "o":
        textoEncriptado += "ober";
        break;
      case "u":
        textoEncriptado += "ufat";
        break;
      default:
        textoEncriptado += texto[i];
        break;
    }
  }
  return textoEncriptado;
}

function desencriptarTexto(texto) {
  let textoDesencriptado = "";
  for (let i = 0; i < texto.length; i++) {
    if (texto.substr(i, 2) === "ai") {
      textoDesencriptado += "a";
      i += 1;
    } else if (texto.substr(i, 5) === "enter") {
      textoDesencriptado += "e";
      i += 4;
    } else if (texto.substr(i, 4) === "imes") {
      textoDesencriptado += "i";
      i += 3;
    } else if (texto.substr(i, 4) === "ober") {
      textoDesencriptado += "o";
      i += 3;
    } else if (texto.substr(i, 4) === "ufat") {
      textoDesencriptado += "u";
      i += 3;
    } else {
      textoDesencriptado += texto[i];
    }
  }
  return textoDesencriptado;
}
