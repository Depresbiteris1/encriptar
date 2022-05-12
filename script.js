const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");
const copyButton = document.getElementById('copy');

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.background = "none"
}


function btnDesencriptar() {
    const textoEncriptado = desencriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.background = "none"
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            var x  = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }  
    }
    return x
}
function desencriptar(stringEncriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    console.log(stringEncriptada)
    return stringEncriptada
}


copyButton.addEventListener('click', () => {
    mensagem.select();
    document.execCommand('copy');
});

