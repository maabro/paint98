/*
* M06. Desenvolupament web en entorn client
* UF1. Sintaxi del llenguatge. Objectes predefinits del llenguatge
* autores: Victor Lucas, Marcos Abaurrea
* fecha: 14-10-2019
* ../js/paint.js
*/
window.onload = function () {
    var x = 0;
    var y = 0;
    var x2 = 0;
    var y2 = 0;
    var x3 = 0;
    var y3 = 0;
    var fill = false;
    var last;
    var rotate = 0;  // inicializamos el valor de la rotacion 
    var imgA = document.createElement('img'); // creamos la variable para la imagen
    imgA.src = 'http://localhost/proyecto_canvas/img/bitmaps.jpg'; // la direccion donde se guarda la imagen
    var ptr = false; // variable que inicializa el estado de los patrones
    var imgP01 = document.createElement('img'); // patron01
    imgP01.src = 'http://localhost/proyecto_canvas/img/patron01.png';
    var imgP02 = document.createElement('img'); // patron02
    imgP02.src = 'http://localhost/proyecto_canvas/img/patron02.png';
    var imgP03 = document.createElement('img'); // patron03
    imgP03.src = 'http://localhost/proyecto_canvas/img/patron03.png';   
    try {
        document.createElement("canvas").getContext("2d");
    } catch (e) {
        document.getElementById("suport").innerHTML = "HTML5 Canvas no suportat.";
    }
    var canvas = document.getElementById('area');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var pat;
        // FORMAS GEOMETRICAS
        function dibuixarCircle() {
            last = "circle";
            var widthl = parseInt(document.getElementById("width").value);
            var dash = parseInt(document.getElementById("dash").value);
            ctx.translate(x, y);
            ctx.rotate(rotate * Math.PI / 180);
            ctx.translate(-x, -y);
            var radi = Math.sqrt(Math.pow(x - x2, 2) + Math.pow(y - y2, 2));
            ctx.beginPath();
            ctx.arc(x2, y2, radi, 0, 2 * Math.PI);
            if(ptr){
                ctx.fillStyle = pat;
                ctx.fill();
            }
            else if (fill) {
                ctx.fillStyle = document.getElementById('color').style['background-color'];
                ctx.fill();
            }
            else {
                ctx.lineWidth = widthl;
                ctx.strokeStyle = document.getElementById('color').style['background-color'];
                if(dash == 1){
                    ctx.setLineDash([]);
                }
                else if(dash == 2){
                    ctx.setLineDash([10, 10]);
                }
                else {
                    ctx.setLineDash([15, 3, 3, 3]);
                }
                ctx.stroke();
            }
        }
        function dibuixarSquare() {
            last = "square";
            var widthl = parseInt(document.getElementById("width").value);
            var dash = parseInt(document.getElementById("dash").value);
            ctx.translate(x, y);
            ctx.rotate(rotate * Math.PI / 180);
            ctx.translate(-x, -y);
            ctx.beginPath();            
            ctx.moveTo(x, y);
            ctx.lineTo(x, y2);
            ctx.lineTo(x2, y2);
            ctx.lineTo(x2, y);
            ctx.closePath();
            if(ptr){
                ctx.fillStyle = pat;
                ctx.fill();
            }
            else if (fill) {
                ctx.fillStyle = document.getElementById('color').style['background-color'];                   
                ctx.fill();
            }
            else {
                ctx.lineWidth = widthl;
                ctx.strokeStyle = document.getElementById('color').style['background-color'];
                if(dash == 1){
                    ctx.setLineDash([]);
                }
                else if(dash == 2){
                    ctx.setLineDash([10, 10]);
                }
                else {
                    ctx.setLineDash([15, 3, 3, 3]);
                }
                ctx.stroke();
            }
        }
        function dibuixarTriangle() {
            last = "triangle";
            var widthl = parseInt(document.getElementById("width").value);
            var dash = parseInt(document.getElementById("dash").value);
            ctx.translate(x, y);
            ctx.rotate(rotate * Math.PI / 180);
            ctx.translate(-x, -y);
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x2, y2);
            ctx.lineTo(x3, y3);
            ctx.closePath();
            if(ptr){
                ctx.fillStyle = pat;
                ctx.fill();
            }
            else if (fill) {
                ctx.fillStyle = document.getElementById('color').style['background-color'];
                ctx.fill();
            }
            else {
                ctx.strokeStyle = document.getElementById('color').style['background-color'];
                ctx.lineWidth = widthl;
                if(dash == 1){
                    ctx.setLineDash([]);
                }
                else if(dash == 2){
                    ctx.setLineDash([10, 10]);
                }
                else {
                    ctx.setLineDash([15, 3, 3, 3]);
                }
                ctx.stroke();
            }
        }
        function dibuixarLine() {
            var widthl = parseInt(document.getElementById("width").value);
            var dash = parseInt(document.getElementById("dash").value);
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.strokeStyle = document.getElementById('color').style['background-color'];
            ctx.lineTo(x2, y2);
            ctx.lineWidth = widthl;
            if(dash == 1){
                ctx.setLineDash([]);
            }
            else if(dash == 2){
                ctx.setLineDash([10, 10]);
            }
            else {
                ctx.setLineDash([15, 3, 3, 3]);
            }
            ctx.stroke();
        }
        function dibuixarRombo() {
            last = "rombo";
            var widthl = parseInt(document.getElementById("width").value);
            var dash = parseInt(document.getElementById("dash").value);
            ctx.translate(x, y);
            ctx.rotate(rotate * Math.PI / 180);
            ctx.translate(-x, -y);
            ctx.beginPath();
            ctx.moveTo(x, y - 100);
            ctx.lineTo(x + 75, y);
            ctx.lineTo(x, y + 100);
            ctx.lineTo(x - 75, y);
            ctx.closePath();
            if(ptr){
                ctx.fillStyle = pat;
                ctx.fill();
            }
            else if (fill) {
                ctx.fillStyle = document.getElementById('color').style['background-color'];
                ctx.fill();
            }
            else {
                ctx.lineWidth = widthl;
                ctx.strokeStyle = document.getElementById('color').style['background-color'];
                if(dash == 1){
                    ctx.setLineDash([]);
                }
                else if(dash == 2){
                    ctx.setLineDash([10, 10]);
                }
                else {
                    ctx.setLineDash([15, 3, 3, 3]);
                }
                ctx.stroke();
            }
        }
        // ESCRIBIR TEXTO
        function writeText() {
            var widthl = parseInt(document.getElementById("width").value);
            var dash = parseInt(document.getElementById("dash").value);
            var fontSize = document.getElementById("tamano").value;
            var fontFamily = document.getElementById("fuente").value;
            var rotText = parseInt(document.getElementById("rot").value);
            var txt = document.getElementById("texto").value;
            ctx.font = fontSize + "px " + fontFamily;
            if (fill) {
                ctx.fillStyle = document.getElementById('color').style['background-color'];
                ctx.translate(x, y);
                ctx.rotate(rotText * Math.PI / 180);
                ctx.translate(-x, -y);
                ctx.fillText(txt, x, y);
            } else {
                ctx.lineWidth = widthl;
                ctx.strokeStyle = document.getElementById('color').style['background-color'];
                if(dash == 1){
                    ctx.setLineDash([]);
                }
                else if(dash == 2){
                    ctx.setLineDash([10, 10]);
                }
                else {
                    ctx.setLineDash([15, 3, 3, 3]);
                }
                ctx.translate(x, y);
                ctx.rotate(rotText * Math.PI / 180);
                ctx.translate(-x, -y);
                ctx.strokeText(txt, x, y);
            }
        }
        // ESCALADO
        function makeBigger(){
            switch(last){
                case "square":
                    x=x+25;
                    x2=x2-25;
                    y=y+25;
                    y2=y2-25;
                    dibuixarSquare();
                    break; 
            }
        }
        // RELLENO
        function changeFill() {
            fill = !fill;
        }
        // PATRONES
        function makePatron() {
            ptr = true;
            pat = ctx.createPattern(imgP01, "repeat");
        }
        function makePatron2() {
            ptr = true;
            pat = ctx.createPattern(imgP02, "repeat");
        }
        function makePatron3() {
            ptr = true;
            pat = ctx.createPattern(imgP03, "repeat");
        }
        // LIMPIAR CANVAS (GOMA)
        function clearCanvas() {
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        // ROTACION DERECHA
        function rotateRight() {
            switch (last) {
                case "square":
                    rotate = 30;
                    dibuixarSquare();
                    break;
                case "rombo":
                    rotate = 30;
                    dibuixarRombo();
                    break;
                case "triangle":
                    rotate = 30;
                    dibuixarTriangle();
                    break;
                case "circle":
                    rotate = 30;
                    dibuixarCircle();
                    break;
            }
        }
        // ROTACION IZQUIERDA
        function rotateLeft() {
            switch (last) {
                case "square":
                    rotate = -30;
                    dibuixarSquare();
                    break;
                case "rombo":
                    rotate = -30;
                    dibuixarRombo();
                    break;
                case "triangle":
                    rotate = -30;
                    dibuixarTriangle();
                    break;
                case "circle":
                    rotate = -30;
                    dibuixarCircle();
                    break;
            }
        }
        // HACER COPIA
        function makeCopy(){
            let imageData = ctx.getImageData(x3, y3, x2-x3, y2-y3);
            ctx.putImageData(imageData, x,y);
        }
        // POSICION CURSOR
        function getCursorPosition(event) {
            var rect = canvas.getBoundingClientRect();
            x3 = x2;
            y3 = y2;
            x2 = x;
            y2 = y;
            x = event.clientX - rect.left;
            y = event.clientY - rect.top;
            console.log("x: " + x + " y: " + y);
        }
        // RESETEAR ROTACION
        function resetRotation() {
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            rotate = 0;
        }
        // MODIFICACION IMAGEN A NIVEL DE BITS
        function ferNegatiu(){
            ctx.drawImage(imgA, x, y);
            var imageData = ctx.getImageData(x, y, canvas.width,canvas.height);
            var pixels = imageData.data;
            for (var i = 0; i < pixels.length; i += 4) {
                pixels[i] = 255 - pixels[i]; // red
                pixels[i+1] = 255 - pixels[i+1]; // green
                pixels[i+2] = 255 - pixels[i+2]; // blue
                // i+3 es alpha
            }
            // modifiquem original
            ctx.putImageData(imageData, x, y);
        }
        function ferBN(){
            ctx.drawImage(imgA, x, y);
            var imageData = ctx.getImageData(x, y, canvas.width,canvas.height);
            var pixels = imageData.data;
            for (var i = 0; i < pixels.length; i += 4) {
                if (pixels[i]>=127.5 ||pixels[i+1]>=127.5 ||pixels[i+2]>=127.5){
                    pixels[i] = 255; // red
                    pixels[i+1] = 255; // green
                    pixels[i+2] = 255; // blue
                }
                else{
                    pixels[i] = 0; // red
                    pixels[i+1] = 0; // green
                    pixels[i+2] = 0; // blue
                }
            }
            ctx.putImageData(imageData, x, y);
        }
        function ferSepia() {
            ctx.drawImage(imgA, x, y);
            var imageData = ctx.getImageData(x, y, canvas.width,canvas.height);
            var pixels = imageData.data;
            for ( var i = 0; i < pixels.length; i++ ) {
                var r = pixels[i*4];
                var g = pixels[i*4+1];
                var b = pixels[i*4+2];         
                pixels[i*4] = 255 - r;
                pixels[i*4+1] = 255 - g;
                pixels[i*4+2] = 255 - b;         
                pixels[i*4] = ( r * .393 ) + ( g *.769 ) + ( b * .189 );
                pixels[i*4+1] = ( r * .349 ) + ( g *.686 ) + ( b * .168 );
                pixels[i*4+2] = ( r * .272 ) + ( g *.534 ) + ( b * .131 );
            }
            ctx.putImageData(imageData, x, y);  
        }
        // DESCARGA IMAGEN
        function download(){
            var download = document.getElementById("download");
            var image = document.getElementById("area").toDataURL("image/png").replace("image/png", "image/octet-stream");
            download.setAttribute("href", image);
        }
        /* FUNCIONES PARA EL COLOR */
        function colorRed() {
            document.getElementById('color').style = "background-color:red";
            ptr = false;
        }
        function colorGreen() {
            document.getElementById('color').style = "background-color:green";
            ptr = false;
        }
        function colorBlue() {
            document.getElementById('color').style = "background-color:blue";
            ptr = false;
        }
        function colorAqua() {
            document.getElementById('color').style = "background-color:aqua";
            ptr = false;
        }
        function colorYellow() {
            document.getElementById('color').style = "background-color:yellow";
            ptr = false;
        }
        function colorGrey() {
            document.getElementById('color').style = "background-color:grey";
            ptr = false;
        }
        function colorTeal() {
            document.getElementById('color').style = "background-color:teal";
            ptr = false;
        }
        function colorSilver() {
            document.getElementById('color').style = "background-color:silver";
            ptr = false;
        }
        function colorNavy() {
            document.getElementById('color').style = "background-color:navy";
            ptr = false;
        }
        function colorOlive() {
            document.getElementById('color').style = "background-color:olive";
            ptr = false;
        }
        function colorLime() {
            document.getElementById('color').style = "background-color:lime";
            ptr = false;
        }
        function colorMaroon() {
            document.getElementById('color').style = "background-color:maroon";
            ptr = false;
        }
        function colorPurple() {
            document.getElementById('color').style = "background-color:purple";
            ptr = false;
        }
        function colorFuchsia() {
            document.getElementById('color').style = "background-color:fuchsia";
            ptr = false;
        }
        function colorBlack() {
            document.getElementById('color').style = "background-color:black";
            ptr = false;
        }
    }

    this.document.getElementById("area").addEventListener("mouseup", getCursorPosition);
    this.document.getElementById("circle").addEventListener("click", dibuixarCircle);
    this.document.getElementById("triangle").addEventListener("click", dibuixarTriangle);
    this.document.getElementById("square").addEventListener("click", dibuixarSquare);
    this.document.getElementById("line").addEventListener("click", dibuixarLine);
    this.document.getElementById("rombo").addEventListener("click", dibuixarRombo);
    this.document.getElementById("fill").addEventListener("click", changeFill);
    this.document.getElementById("rright").addEventListener("click", rotateRight);
    this.document.getElementById("rleft").addEventListener("click", rotateLeft);
    this.document.getElementById("clear").addEventListener("click", clearCanvas);
    this.document.getElementById("reset").addEventListener("click", resetRotation);
    this.document.getElementById("text").addEventListener("click", writeText);
    this.document.getElementById("big").addEventListener("click",makeBigger);
    this.document.getElementById("copia").addEventListener("click",makeCopy);
    this.document.getElementById("download").addEventListener("click",download);
    //COLORES
    this.document.getElementById('red').addEventListener('click', colorRed);
    this.document.getElementById('green').addEventListener('click', colorGreen);
    this.document.getElementById('blue').addEventListener('click', colorBlue);
    this.document.getElementById('aqua').addEventListener('click', colorAqua);
    this.document.getElementById('yellow').addEventListener('click', colorYellow);
    this.document.getElementById('grey').addEventListener('click', colorGrey);
    this.document.getElementById('teal').addEventListener('click', colorTeal);
    this.document.getElementById('silver').addEventListener('click', colorSilver);
    this.document.getElementById('navy').addEventListener('click', colorNavy);
    this.document.getElementById('olive').addEventListener('click', colorOlive);
    this.document.getElementById('lime').addEventListener('click', colorLime);
    this.document.getElementById('maroon').addEventListener('click', colorMaroon);
    this.document.getElementById('purple').addEventListener('click', colorPurple);
    this.document.getElementById('fuchsia').addEventListener('click', colorFuchsia);
    this.document.getElementById('black').addEventListener('click', colorBlack);
    //PATRONES
    this.document.getElementById('ptr01').addEventListener('click', makePatron);
    this.document.getElementById('ptr02').addEventListener('click', makePatron2);
    this.document.getElementById('ptr03').addEventListener('click', makePatron3);
    //MODIFICACIONES BIT
    this.document.getElementById("negative").addEventListener("click",ferNegatiu);
    this.document.getElementById("byn").addEventListener("click",ferBN);
    this.document.getElementById("sep").addEventListener("click",ferSepia);
}