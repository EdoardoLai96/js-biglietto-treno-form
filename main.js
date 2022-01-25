const genera= document.getElementById("genera");

const annulla = document.getElementById("annulla");


const nome = document.getElementById('nome');

const nome_output= document.getElementById("nome_output");

const eta = document.getElementById('eta');

const eta_output= document.getElementById("eta_output");

const carrozza_output = document.getElementById("carrozza_output");

const cp_output = document.getElementById("cp_output");

const costo_output = document.getElementById("costo_output");

const chilometri = document.getElementById("chilometri");





genera.addEventListener("click", 

function() {

document.getElementById("prova").classList.remove("d-none");


nome_output.innerHTML=(nome.value);

eta_output.innerHTML=(eta.value)

carrozza_output.innerHTML= Math.floor(Math.random() * 10);

cp_output.innerHTML= Math.floor(Math.random(0, 10000) * 10000 + 90000);

let prezzo = (chilometri.value * 0.21).toFixed(2);



if (eta.value == "Biglietto Standard"){
    alert("Attenzione! selezionare almeno un'opzione");
    document.getElementById("prova").classList.add("d-none");

}

else if (eta.value == "Minorenne"){
    costo_output.innerHTML = (prezzo * 0.8).toFixed(2) + "€";
    eta.value = "Biglietto Standard";

} else if (eta.value == "65+") {
    costo_output.innerHTML = (prezzo * 0.6).toFixed(2) + "€" ;
    eta.value = "Biglietto Standard";

}else{ costo_output.innerHTML= prezzo + "€";
}

}

) 

annulla.addEventListener("click", 
function() {
nome.value=" ";
eta.value="Biglietto Standard";
chilometri.value=""
}
)



