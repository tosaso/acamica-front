let persona = { 
	nombre: "Tomás",
	edad: 25,
	"profesión": "Diseñador",
	"país": "Argentina",
	provincia: "Córdoba",
	musica: "rock";
}

function esMayorDeEdad(i) {
	if(i >= 18) {
		console.log ("es Mayor de Edad");
	} else {
		console.log ("es menor de edad");
	}
};

esMayorDeEdad(persona.edad);


console.log(*******************)

let producto = {
  id: "AAFC29",
  nombre: "producto",
  cantidad: 20,
  disponible: function producto.disponible (i) {
    if (i <= 0){
      "Disponible"
    } else {
    	"faltante"
    }
  }
};

// 2. Invoca la función aquí
// producto.disponible()
// El resultado debe ser un mensaje que indique que el producto
// esta disponible

// 3. Modifica la propiedad "cantidad" a 0

// 4. Vuelve a invocar la función "disponible"
// El resultado debe ser un mensaje que indique que el producto
// no esta disponible