var tablero, direccion;

var teclas =
{
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};

var fondo = {
	imagenURL: "fondo.png",
	imagenOK: false
};

var tifis = {
	//serie de variables
	x:100,
	y:100,
	frenteOK: false,
	atrasOK: false,
	derOK: false,
	izqOK: false,
	velocidad: 30
};
var liz = {
	lizURL: "liz.png",
	lizOK:false,
	x:400,
	y:200
};

function inicio()
{
	var canvas = document.getElementById("campo");
	tablero = canvas.getContext("2d");

	fondo.imagen = new Image();
	fondo.imagen.src = fondo.imagenURL;
	fondo.imagen.onload = confirmarFondo;

	tifis.frente = new Image();
	tifis.frente.src = "diana-frente.png";
	tifis.frente.onload = confirmarFrente;

	tifis.atras = new Image();
    tifis.atras.src = "diana-atras.png";
    tifis.atras.onload = confirmarAtras;

    tifis.izq = new Image();
    tifis.izq.src = "diana-izq.png";
    tifis.izq.onload = confirmarIzq;

    tifis.der = new Image();
    tifis.der.src = "diana-der.png";
    tifis.der.onload = confirmarDer;

	liz.liz = new Image();
	liz.liz.src = liz.lizURL;
	liz.liz.onload = confirmarLiz;

	document.addEventListener("keydown", teclado); //eventos 
}

function teclado(datos)
{
    var codigo = datos.keyCode;

    if(codigo == teclas.UP)
    {
        tifis.y -= tifis.velocidad;
    }

    if(codigo == teclas.DOWN)
    {
        tifis.y += tifis.velocidad;
    }

    if(codigo == teclas.LEFT)
    {
        tifis.x -= tifis.velocidad;
    }

    if(codigo == teclas.RIGHT)
    {
        tifis.x += tifis.velocidad;
    }
    direccion = codigo;
    dibujar();
}

function confirmarFondo()
{
	fondo.imagenOK=true;
	dibujar();
}

function confirmarFrente()
{
	tifis.frenteOK=true;
	dibujar();
}

function confirmarAtras()
{
	tifis.atrasOK=true;
	dibujar();
}

function confirmarIzq()
{
	tifis.izqOK=true;
	dibujar();
}

function confirmarDer()
{
	tifis.derOK=true;
	dibujar();
}

function confirmarLiz()
{
	liz.lizOK=true;
	dibujar();
}

function dibujar() //guarda todos los elementos
{
	//capa 1
	if(fondo.imagenOK == true)
	{
		tablero.drawImage(fondo.imagen, 0,0); // drawImage diuja una imagen
	}
	//capa 2
	var tifisDibujo = tifis.frente;

    if(tifis.frenteOK && tifis.atrasOK && tifis.derOK && tifis.izqOK)
    {
        if(direccion == teclas.DOWN)
        {
            tifisDibujo = tifis.frente;
        }
        else if(direccion == teclas.UP)
        {
            tifisDibujo = tifis.atras;
        }
        else if(direccion == teclas.LEFT)
        {
            tifisDibujo = tifis.izq;
        }
        else if(direccion == teclas.RIGHT)
        {
            tifisDibujo = tifis.der;
        }
    }
    
    tablero.drawImage(tifisDibujo, tifis.x, tifis.y);
	// capa 3. Enemigo Liz
	// como liz OK en boleana no ncesesito comparar
	if(liz.lizOK)
	{
		tablero.drawImage(liz.liz, liz.x, liz.y);
	}
}
