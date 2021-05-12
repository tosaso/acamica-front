
//Contrato para el gameObject:
let gameObject = {
  stats : {
    carisma: 20,
    fuerza: 20,
    belleza: 20,
    inteligencia: 20
  },
  items : {
    linternas: 0,
    estacas: 0,
    tijeras: 0,
    globos: 0,
    espejo: false
  },
}


// afecta inteligencia
function unitornio(gameObject) {
  console.log("La heroina se enfrentará al ** Unitornio **")
 
  if (gameObject.items.globos > 0){
    //gana y pasas de nivel
    console.log("La Heroina atacará al Unitornio porque tiene " + gameObject.items.globos + " globo");
    console.log('La Heroina atacó y derrotó al Unitornio :)');
    gameObject.stats.inteligencia = gameObject.stats.inteligencia + 5;
    console.log('La Heroina quedó con ' + gameObject.stats.inteligencia + " de inteligencia" );
     gameObject.items.globos = gameObject.items.globos - 1;
     console.log("La heroína gastó 1 globo, y quedó con " + gameObject.items.globos + " globos"  )
  } else {
    //perdes -10 inteligencia
    gameObject.stats.inteligencia = gameObject.stats.inteligencia - 10;
    console.log("El Unitornio atacó a nuestra Heroína. Perdió 10pts de Inteligencia. Le quedó " + gameObject.stats.inteligencia + " puntos de inteligencia"); 
    // perder otros puntos

     (gameObject.stats.inteligencia <= 0) 
      gameObject.stats.carisma = gameObject.stats.carisma - 2;
      gameObject.stats.fuerza = gameObject.stats.fuerza - 2;
      gameObject.stats.belleza = gameObject.stats.belleza - 2;
     console.log("Además perdiste dos puntos en el resto de los stats");
     
     //actualizacion stats e items
    return gameObject;
  }




//  console.log(`${property}: ${object[property]}`);


  /*
  //    - unitornio puede ser eliminado si se usa un globo en su contra.
    - Se obtiene +5 en inteligencia si unitornio es eliminado.
    - Si se usa un globo, recuerda actualizar el inventario.
    - Si no se tiene un globo, unitornio atacara, lo cual disminuira la inteligencia en -10

    - Si unitornio ataca y la inteligencia es igual o menor a 0, restar -2 en todos los atributos restantes


    Imprimir cada accion en la consola:
    - Si unitornio ataca. 
    - Si unitornio fue eliminado usando un globo.
    - Cantidad de globos restantes
    
     La función retorna un game object actualizado (stats e inventario)
  */
}


function obtenerGlobo(gameObject) {
  if (gameObject.stats.inteligencia <= 5) {
    (Math.random()* 10) + 1 > 2;
    gameObject.items.globos = gameObject.items.globos + 1
  } else {
    (Math.random()* 10) + 1 =< 2;
    gameObject.items.globos = gameObject.items.globos;
  }

  return obtenerGlobo

  /*
    - Este item se obtiene sobre una relacion del valor de inteligencia.
    - Si el valor de inteligencia de la heroina es menor o igual 5: 80% probabilidad de sumar 1 globo, 20% de no obtener nada.
    - La condicion es inversa si inteligencia es mayor a 5
    - De obtener un item, actualizar el inventario en el gameObject
    - Imprimir en consola si el item fue agregado, o si el cofre no tenia nada.
    


    ¿Como calcular la probabilidad?
    - Generar un número random entre 1 y 10
    - El 80% de probabilidad se considera cierto si el número random es mayor a 2. 
    - El 20% de probabilidad se considera cierto si el número random esta entre 1 y 2 inclusive.
    
      La función obtenerGlobo retorna un game object actualizado (stats e inventario)
  */
}














