
var x = 10;

var y = 10;

var z = x + y;


// esto es inicializar una variable.
var pollo; 

//esto es asignar un valor a una variable.
pollo = 50;


document.getElementById("demo").innerHTML =

"The value of z is: " + z;

document.getElementById("demo2").innerHTML =

"caballo homosexual de las montañas";

//IMPORTANTE esto se utiliza para poder visualizar constantemente las variables dentro del javascript en el navegador
console.log("guatemala cabron",z);

console.log(pollo);

var papa = false;

var tomate;

if (papa==true) {

tomate = "fruta";

console.log("verdadero");
}

else if (papa==false) {

tomate = "carne";

console.log("falso");

}

// definir es cuando se crea la variable (var x;)
// inicializar es asignar un valor (x = 1)
// no confundir estos conceptos con comparacion logica. ej: (x == 1)

var huevo ;

huevo = "pala"=='pala';

console.log("huevo",huevo);

//los comparadores logicos son:
// ==, > , <, >=, <=, ! (negacion) 

var numero = 5;

var paila = "cocina";

console.log("condicion logica", (numero>5 && paila == "cocina"));

if (numero>5 && paila == "cocina") {

    
    console.log("5 verdadero"); 
    }
    
    else if (numero<=5) {
    

    console.log("5 falso");
    
    }
// && (and) , || (or)

