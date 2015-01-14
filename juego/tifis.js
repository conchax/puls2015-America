var tablero;
var fondo = {
	imagenURL: "fondo.png"
};
function inicio()
{
	var canvas = document.getElementById("campo");
	tablero = canvas.getContext("2d");

	fondo.imagen = new Image();
	fondo.imagen.src = fondo.imagenURL;
	fondo.imagen.onload = dibujarFondo;
}
function dibujarFondo()
{
	tablero.drawImage(fondo.imagen, 0, 0);
}