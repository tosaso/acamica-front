//📝 1. Escribe una función que muestre un saludo por consola. Puedes guiarte por este gist.

function nombreDeFuncion() {
	console.log("hola mundo!");
}

//2. Escribe una función que muestre por consola la suma de dos números. 
//Ambos números deben estar declarados dentro de la función en su respectiva variable, 
//y deberás crear una tercera variable que almacene la suma de los dos números anteriores. 
//Muestra el resultado por consola.


function sumar(a,b) {
	var suma = a+b;
	return suma;
}

var a = sumar(3,4)

console.log("El resultado de la suma es: " +a);

//3. Escribe una función que verifique si un número es mayor a diez. 
//La función deberá tomar un número entero (positivo o negativo) como parámetro, 
//y mostrar por consola si tal número es mayor a 10.


function numero(n1,n2){
	if (n1>n2){
		return "El numero " +n1+ " es mayor que el numero " + n2;
	}else{
		return "El numero " +n2+ " es mayor que el numero " + n1;
	}
}

console.log(numero(10,5));
 

 /* ¡Desarrolla una función para el “Escándalo-tron”!

La función deberá tomar 3 números y retornar el resultado correspondiente a la consigna de la versión 0.2:

Si la cantidad total de decibelios es menor a 30, y mayor a 0, el Escándalo-tron retornara un mensaje indicando que las personas están susurrando, 

Si es mayor o igual a 30 pero menor que 60, indicará que el sonido es normal, pero si la cantidad total es mayor o igual que 60, indicará que las personas están haciendo un ESCÁNDALO. */


let num1 = 10;
let num2 = 20;
let num3 = 40;
let suma = calculo(num1, num2, num3);

function calculo(n1,n2,n3){
	return n1 + n2 + n3;
}

function escandalotron(suma){
	if (suma >= 30 && suma < 0){ 
		console.log("Sonido normal")
	}else if ( suma <= 30){
		console.log("están susurando")
	}else {
		console.log("Es un escándalo")
	}
}

escandalotron(suma);



//Escribe una función que salude personalmente a alguien. 
//La función debe tomar el nombre de una persona como parámetro, 
//e imprimir por consola “hola (el nombre de la persona)”.

let nombre = "Saul";

function saludo(nn){
	console.log("Hola " + nn)
}

saludo(nombre);


//Escribe una función que retorne el cuadrado de un número. 
//La función deberá tomar un número entero positivo o negativo como parámetro, 
//y retornar el doble de ese número.


//let n = 5;
//let n2 = n*n;


//Escribe una función que tome un número como parámetro y
// verifique si es par o impar. 
//Si es par, imprime por consola el mensaje “PARSISIMO” 
//y si es impar “IMPARSISIMO”.


let n = 7

function calculo (x){
	if ( x%2 == 0 ){
		return "Par"		
	}else {
		return "Impar"
	}
}

let resultado = calculo(n);
console.log(resultado);


//comparar sin declarar valores, cual es el mayoir

let n1 = 7;
let n2 = 3;

function calcular (n,x){
	if (n < x){
		console.log( n + " es más chico que " + x)
	} else {
		console.log(x + " es más chico que " + n)
	}
}

calcular(n1, n2);


//funcion cuando se agregue parametro, es mayor de edad o no lo es. 
// usar return

function mayoriaEdad (n){
	if (n > 18){
		return "Es mayor de edad"
	}else {
		return "Es una nena"
	}
}

let calculoEdad = mayoriaEdad(7);
console.log(calculoEdad);














