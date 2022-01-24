const genera= document.getElementById("genera");


const nome = document.getElementById('nome');

const nome_output= document.getElementById("nome_output");

const eta = document.getElementById('eta');

const eta_output= document.getElementById("eta_output");

const carrozza_output = document.getElementById("carrozza_output")

const cp_output = document.getElementById("cp_output")

const costo_output = document.getElementById("costo_output")

const chilometri = document.getElementById("chilometri")


genera.addEventListener("click", 

function() {

// ripetere per altri valori (input select)

console.log(nome.value);
nome_output.innerHTML=(nome.value);

eta_output.innerHTML=(eta.value)

carrozza_output.innerHTML= Math.floor(Math.random() * 10);

cp_output.innerHTML= Math.floor(Math.random(0, 10000) * 10000 + 90000);

let prezzo = chilometri.value * 0.21;



if (eta.value = "Minorenne"){
    costo_output.innerHTML = prezzo * 0.8 ;

} else if (eta.value ="65+") {
    costo_output.innerHTML = Math.floor(prezzo * 0.6) ;

}

}

)



