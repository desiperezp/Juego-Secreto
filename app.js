let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximoIntentos  = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto){
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento(){
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  console.log(numeroDeUsuario === numeroSecreto);
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'Veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento('p','El número es menor');
    } else {
      asignarTextoElemento('p','El número es mayor');
      }
    intentos++;
    limpiarCaja();
    }
}
  
function limpiarCaja(){
  document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
  let numeroGenerado = Math.floor(Math.random()*numeroMaximoIntentos)+1;
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  if (listaNumerosSorteados.length == numeroMaximoIntentos){
    asignarTextoElemento('p','Ya ingresaste todos los numeros disponibles');
  } else{
    //Si el numero generado esta incluido en la lista entonces
     if (listaNumerosSorteados.includes(numeroGenerado)){
     return generarNumeroSecreto();
    } else{
     listaNumerosSorteados.push(numeroGenerado);
     return numeroGenerado;
    }
  }
}

function condicionesIniciales(){
  asignarTextoElemento('h1','Juego del número secreto');
  asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximoIntentos}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  //Limpiar caja
  limpiarCaja();
  //Indicar mensaje de intervalo de numeros
  //Generar número aleatorio
  //reiniciar número de intentos
  condicionesIniciales();
  //Deshabilitar el boton de nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
