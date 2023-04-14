/* N°1 | Realizar un programa que permita el ingreso de un número y muestre su tabla de
multiplicar (Los primeros 10 múltiplos).  */

/* 
    let numero = parseInt(prompt("Ingrese un numero"));


    for (let num = 1; num <= 10; num++) {
        let resultado = numero * num;
        console.log(resultado)
    } */

/* N°2 | Realizar un programa que permita el ingreso de números los cuales se tienen que ir
acumulando. El ingreso de datos terminará cuando el usuario ingrese un valor 0.  */

/* let numero;
let resultado = 0;
while (numero !== 0) {
    numero = parseInt(prompt("Ingresa un numero"));
    resultado += numero;
}
alert(`el numero acumulado es ${resultado}`) */

/* N°3 | Realizar en juego de adivinar el número de los ejercicios del tema anterior, en una
variable guardar un número que esté en el rango 1 - 100. La persona deberá poder ingresar
números hasta adivinar el valor que se encuentre en dicha variable. Si el valor es menor al
número secreto, avisarle al usuario lo sucedido y pedirle nuevamente el ingreso de otro
número, realizar la misma acción pero en lugar de cuando es menor, si es que el número
ingresado es mayor. Así sucesivamente hasta que el usuario adivine el número secreto. Por
último mostrar un mensaje de felicitaciones y decirle en cuantos intentos lo ha realizado */

/* const numeroSecreto = Math.ceil(Math.random() * 100);
    let intentos = 0;
    let numero = 0;
    while (numero !== numeroSecreto) {
        numero = parseInt(prompt("Ingresa un numero entre 1 y 100"))
        if (numero < numeroSecreto) {
        alert ("El numero es menor al numero secreto")
        } else if (numero > numeroSecreto) {
        alert ("El numero es mayor al numero secreto")
        }
        intentos++;
} alert(`Felicitaciones, adivinaste el numero secreto, te llevo ${intentos} intentos`) */

/* N°4 | Realizar un programa que permita decir si un número es primo. Un número es primo si solo es divisible
por el valor 1 y por sí mismo. Ayuda: Usar la operación de módulo. Los números solo poseen divisores hasta la
mitad del valor del mismo. Ej: 50 tiene como divisores 1, 2, 5, 10 y 25. No es primo. Con tener más de 2
divisores el número ya no es primo */

/* let numero = parseInt(prompt("ingresa un numero"));
if (numero <= 1) {
    alert("El numero no es primo");
    return;
}

for */

/* N°5 | Realizar un programa que permita dado un numero, mostrar todos sus divisores.  */

/* let numero = parseInt(prompt("Ingresa un número "));
    let divisores = "";
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
        divisores += i + " ";
        }
    }
    alert(`Los divisores de ${numero} son los siguientes ${divisores}`); */

/*   N°6 | Dado un array de 10 elementos, realizar un programa que recorra ese array y muestre un mensaje por
consola con cada uno de los elementos del array */

/*     const elementos = ['elemento 1', 'elemento 2', 'elemento 3', 'elemento 4', 'elemento 5', 'elemento 6', 'elemento 7', 'elemento 8', 'elemento 9', 'elemento 10'];
for (let i = 0; i < elementos.length; i++) {
    console.log(elementos[i]);
} */

/* N°7 | Dado un array de 10 números, realizar un programa que muestre por consola el doble de cada uno de
los elementos */

/*   let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i] * 2);
  } */

/* N°8 | Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada objeto representa a 1
persona con al menos 4 propiedades, realizar un programa que muestre un mensaje de presentación por
cada elemento del array. */

/* let grupoFamiliar = [
  {
    nombre: "Diego",
    edad: 24,
    trabajo: "Maestro",
    estadoCivil: "Soltero",
  },
  {
    nombre: "Daniela",
    edad: 32,
    trabajo: "Chef",
    estadoCivil: "Casada",
  },
  {
    nombre: "Hugo",
    edad: 50,
    trabajo: " Taxista",
    estadoCivil: "Casado",
  },
  {
    nombre: "Marina",
    edad: 55,
    trabajo: "Enfermera",
    estadoCivil: "En pareja",
  },
  {
    nombre: "Damian",
    edad: 18,
    trabajo: "Mozo",
    estadoCivil: "Soltero",
  },
];
for (let i = 0; i < grupoFamiliar.length; i++) {
  let familiar = grupoFamiliar[i];
  console.log(
    `Hola, mi nombre es ${familiar.nombre}, tengo ${familiar.edad} años de edad, soy ${familiar.trabajo} y estoy ${familiar.estadoCivil} actualmente.`
  );
} */

/* N°9 | Dado un array de 10 números, realizar un programa que recorra el array y solo muestre los números
impares.  */
/* const numeros = [2, 3, 8, 9, 11, 13, 14, 16, 20, 23];
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 1) {
    console.log(numeros[i]);
  }
} */

/* N°10 | Realizar un programa que permita la entrada de números y calcule la suma de los números pares por
un lado y los impares por otro, el ingreso de dato finaliza cuando el usuario ingresa un 0.  */


/* let numero = parseInt(prompt("Ingresa un numero: "));
let sumaPares = 0;
let sumaImpares = 0;
while (numero !== 0) {
    if (numero % 2 === 0) {
         sumaPares += numero;
    } else {
         sumaImpares += numero;
        }
        numero = parseInt(prompt("Ingresa otro numero: "));
    }
    alert(`La suma de los numeros pares es ${sumaPares}`);
    alert(`La suma de los numeros impares es ${sumaImpares}`); */


/* N°11 | Dado un array de 10 números, realizar un programa que imprima por pantalla el número más grande. */

 /* const numeros = [5, 9, 22, 11, 30, 4, 15, 88, 7, 25];
    let numeroMasGrande = 0;
    for (let i = 1; i < array.length; i++) {
        if (numeros[i] > numeroMasGrande) {
            numeroMasGrande = numeros[i];
        }
    }
    console.log(`De ${numeros} el numero más grande es ${numeroMasGrande}`); */

        
/* N°12 | Dado un array de 10 números, realizar un programa que imprima por pantalla el número más chico. */
/* const numeros = [5, 9, 22, 11, 30, 4, 15, 88, 7, 25];
    let numeroMenor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < numeroMenor) {
            numeroMenor = numeros[i];
        }
    }
console.log(`De ${numeros} el numero más chico es ${numeroMenor}`);  */



/*  N°13 | Realizar un programa que permita jugar a piedra papel o tijeras, se deberá poder ingresar los nombres
de 2 jugadores. En el bucle del juego se deberá pedir 1 a 1 las manos de cada jugador, y en cada turno se
deberá seguir jugando solo si se produjo un empate. Caso contrario mostrar un mensaje con el nombre de la
persona ganadora */
/* let jugador1 = prompt("Nombre del primer jugador");
let jugador2 = prompt("Nombre del segundo jugador");
let jugada1, jugada2;
while (jugada1 === jugada2) {
  jugada1 = prompt(`${jugador1}, elige: piedra, papel o tijera`).toLowerCase();
  jugada2 = prompt(`${jugador2}, elige: piedra, papel o tijera`).toLowerCase();
  if (
    (jugada1 === "piedra" && jugada2 === "tijera") ||
    (jugada1 === "papel" && jugada2 === "piedra") ||
    (jugada1 === "tijera" && jugada2 === "papel")
  ) {
    alert(`Gana ${jugador1}`);
  } else if (
    (jugada2 === "piedra" && jugada1 === "tijera") ||
    (jugada2 === "papel" && jugada1 === "piedra") ||
    (jugada2 === "tijera" && jugada1 === "papel")
  ) {
    alert(`Gana ${jugador2}`);
  } else {
    alert(" Empate");
  }
}  */


/* N°14 | Realizar un programa que imprima por consola un triángulo de 5 asteriscos de lado */
/* for (let i = 1; i <= 5; i++) {
  let triangulo = "";
  for (let j = 1; j <= i; j++) {
    triangulo += "*";
  }
  console.log(triangulo);
} */

/* N°15 | Realizar un programa que imprima por consola un triángulo de 5 asteriscos de lado pero invertido */
/*  for (let i = 5; i >= 1; i--) {
   let triangulo = "";
   for (let j = 1; j <= i; j++) {
     triangulo += "*";
   }
   console.log(triangulo);
 } */

/* N°16 | Dado un array de 10 números desordenados, realizar un programa que imprima por pantalla el array
ordenado. (NO USAR SORT, solo ciclos FOR)
let programa = document.getElementById("programa");
    const array = [5, 3, 7, 1, 9, 2, 4, 10, 6, 8];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
            let plantilla = array[i];
            array[i] = array[j];
            array[j] = plantilla;
            }
        }
    }
    programa.innerHTML += `<p>Array ordenado: ${array}</p>`;
}
 */
