/*
* M06. Desenvolupament web en entorn client
* UF1. Sintaxi del llenguatge. Objectes predefinits del llenguatge
* autores: Victor Lucas, Marcos Abaurrea
* fecha: 14-10-2019
* ../js/video.js
*/
var video = document.getElementById("video"); //creamos una variable video donde se almacena el elemento video

document.getElementById('play').addEventListener('click', botPlay, true); //al pulsar el boton llama a la funcion botPlay()
document.getElementById('pause').addEventListener('click', botPause, true); //al pulsar el boton llama a la funcion botPause()
document.getElementById('stop').addEventListener('click', botStop, true); //al pulsar el boton llama a la funcion botStop()

function botPlay(){
    video.play(); // empieza a reproducir el video
}

function botPause(){
    video.pause(); // pausa el video
}

function botStop(){ // la funcion hace que el video pare y vuelva al principio
    video.pause(); //pausa el video
    video.currentTime = 0; // vuelve al inicio del vidio
}



