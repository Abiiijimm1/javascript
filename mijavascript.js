function saludar2(){
    let nombre = prompt("Ingresa tu nombre");
    alert("Hola " + nombre + " desde Javacript ");
}

function tiposVariables(){
    //Hay 2 formas de declarar variables
    //1. var: permite declaraciones de variables
    //Nota: En la actualidad no se recomienda ocupar var

    var sueldo = 5000;
    var sueldo = 7000;

    console.log("Sueldo = " + sueldo)

    //2.Let: No permite la declaración de variables
    //"viven" ó su alcance son por scope() // Un scope es un bloque de codigo cerrado entre llaves{}

    let aguinaldo = 60000;
    // let aguinaldo = 80000;
    if (true){
        let aguinaldo = 100000
        console.log(aguinaldo)
    }
    console.log(aguinaldo)
   //3.- const: el valor no puede cambiar
   //NOTA: en objetos(arrays, maps,...) si se puede modificar

   const PI = 3.1416;
//    PI = 3.15;
   console.log("Valor de PI=" + PI);
   const mascotas = [
    {nombre:"perro", juguete: "pelota"},
    {nombre:"gato", juguete:"estambre"},
    {nombre:"hamster", juguete:"rueda"}
   ];
   mascotas.push({nombre:"perico", juguete:"columpio"})
   console.log(mascotas)


}
