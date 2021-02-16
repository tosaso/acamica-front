let nombres = [ "jose",
				"maria",
				"pedro",
				"juan",
				"tomas"];

console.log(nombres);

function mostrarArray(nn){
	for (let i=0; i<nn.length; i++){
		console.log(nn[i])
	}
}

console.log("Challenge 01 +++++++++++++++")

 // Escribe un ciclo que muestre por consolas los números del 1 al 10.

for (let i=10; i>=1; i--){
	console.log(i)
}


//Escribe un ciclo que vaya desde 0 hasta 30 y, 
//si el número de iteración es par, imprimir por consola “emparedado”.

for (let i=1; i<=30; i++){
	if(i%2 == 0){
		console.log(i + " par")
	}else{
		console.log(i)
	}
}

//verificar si un usuario estaba dentro de la lista, y si esta borrarlo

let usuarios = ["jose",
				"maria",
				"pedro",
				"juan",
				"tomas"];

let apellidos = ["sanchez",
				"gomez",
				"gonzalez",
				"perez",
				"lopez"];

function chequear(lista,nombre){
	let a = lista.indexOf(nombre);
	for(let i=0; i<lista.length; i++){
		if(lista[a]==nombre){
			lista.splice(a,1)
		}
	}if (a >= 0) {
		mostrarArray(lista)
	}else{
		console.log(a)
	}
}

chequear(apellidos,"gomez")


function mostrarArray (a){
	for(let i=0; i<a.length; i++){
		console.log(a[i])
	}
}




