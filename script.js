let entrada;
let arrayEntrada;
let textoCriptografado;
let msg;

function encrypt() {
  entrada = document.querySelector(".text-input").value;

  arrayEntrada = entrada.split("");

  for (let index = 0; index < arrayEntrada.length; index++) {
    switch (arrayEntrada[index]) {
      case "a":
        arrayEntrada[index] = "ou";
        break;
      case "e":
        arrayEntrada[index] = "alt";
        break;
      case "i":
        arrayEntrada[index] = "esc";
        break;
      case "o":
        arrayEntrada[index] = "stop";
        break;
      case "u":
        arrayEntrada[index] = "fixa";
        break;
    }
  }

  textoCriptografado = arrayEntrada.join("");

  msg = document.querySelector("#msg");
  msg.value = textoCriptografado;
}

let boton = document.querySelector("#boton-cripto");

boton.addEventListener("click", function (e) {
  e.preventDefault();

  encrypt();
});

let botonCopia = document.querySelector("#boton-copia");
let textoCopiado;
let novoTexto;

botonCopia.addEventListener("click", function (e) {
  e.preventDefault();

  textoCopiado = document.querySelector("#msg").value;

  novoTexto = document.querySelector(".text-input");

  novoTexto.value = textoCopiado;
});

function decrypt(textoCopiado) {
  return textoCopiado
    .replaceAll("ou", "a")
    .replaceAll("alt", "e")
    .replaceAll("esc", "i")
    .replaceAll("stop", "o")
    .replaceAll("fixa", "u");
}

let botonDescriptografar = document.querySelector("#boton-descripto");

botonDescriptografar.addEventListener("click", function (e) {
  e.preventDefault();

  let saida = document.querySelector(".text-input").value;

  msg.value = decrypt(saida);
});
