

function ponerTextoParrafo(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;

    
}

function codificar(numero){
    console.log(numero)
    variacion = (numero * 5) - 4;
    console.log(variacion);
    return String.fromCharCode(variacion);

}

function descodificar(numero){
    console.log(numero)
    variacion = (numero + 4) / 5;
    console.log(variacion);
    return String.fromCharCode(variacion);
    
}

function obtenerTexto() {
    let textoRecibido = document.getElementById("textoIngresado").value;
    return textoRecibido;
    
}

function encriptar(){
    let letra;
    
    
    let textoEncriptar = obtenerTexto();
    for (let i = 0; i < textoEncriptar.length ; i ++){
        letra = textoEncriptar.substr(i,1);
        textoEncriptar = textoEncriptar.replace(letra, codificar(textoEncriptar.charCodeAt(i)));

    }
    ponerTextoParrafo('p', textoEncriptar);
    limpiartexto();

}

function desencriptar(){
    let letra;
    let textoDesencriptar = obtenerTexto();
    for (let i = 0; i < textoDesencriptar.length ; i ++){
        letra = textoDesencriptar.substr(i,1);
        textoDesencriptar = textoDesencriptar.replace(letra, descodificar(textoDesencriptar.charCodeAt(i)));

    }
    ponerTextoParrafo('p', textoDesencriptar);
    limpiartexto();

}

function limpiartexto(){
    document.querySelector('#textoIngresado').value = '';

}



const copiartexto = async () => {
    let texto = document.getElementById('salida').innerHTML;   
    navigator.clipboard.writeText(texto);
    
    
    
}
    

