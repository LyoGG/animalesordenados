var Animales = [];
function submit() {
    var NombreAnimal = [];
    for (var j = 1; j <= 4; j++) {
        var NombreAnimal = document.getElementById("nombre_animal_" + j).value;
        console.log(NombreAnimal);
        Animales.push(NombreAnimal);
    }
    console.log(Animales);
    var LongitudAnimal = Animales.length;
    console.log(LongitudAnimal);
    for (var k = 0; k < LongitudAnimal; k++) {
        LongitudAnimal.push("<h4> NOMBRE - " + LongitudAnimal[k] + "</h4>");
        console.log(LongitudAnimal);
    }
    console.log(NombreAnimal)
    document.getElementById("ver_nombre_con_comas").innerHTML = NombreAnimal
    var removercomas = NombreAnimal.join("");
    console.log(removercomas);
    document.getElementById("ver_nombre_sin_comas").innerHTML = removercomas
    document.getElementById("botón_enviar").style.display = "none";
    document.getElementById("botón_ordenar").style.display = "inline-block";
}
function sorting() {
    Animales.sort();
    console.log(Animales);
    var LongitudAnimales = [];  
    
    var LongitudAnimales = [];

    
}