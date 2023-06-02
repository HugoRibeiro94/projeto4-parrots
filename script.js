let qtd = 0;

const tipoCartas = [
    'bobrossparrot',
    'explodyparrot',
    'fiestaparrot',
    'metalparrot',
    'revertiparrot',
    'tripletsparrot',
    'unicornparrot'
]

function perguntarQtdeCartas(){

    qtd = Number(prompt('Digite a quantidade de cartas:'));

    while( qtd <4 || qtd > 14 || qtd%2===1){
    qtd = Number(prompt('Digite a quantidade de cartas:'));
    }

    renderizarCartas()
}

perguntarQtdeCartas()

function renderizarCartas(){

    const cartas = document.querySelector('.container-carta')
    
    for( let i = 0; i < (qtd/2); i++){
        cartas.innerHTML += `
        <div onclick="virarCarta(this)" class="card">
            <div class="carta1 face">
                <img src="back.png">
            </div>
            <div class="carta2 back-face face">
                <img src="${tipoCartas[i]}.gif">
            </div>
        </div>`
        cartas.innerHTML += `
        <div onclick="virarCarta(this)" class="card">
            <div class="carta1 face">
                <img src="back.png">
            </div>
            <div class="carta2 back-face face">
                <img src="${tipoCartas[i]}.gif">
            </div>
        </div>`
    }
    console.log(cartas);
}


/*
const baralho[];

let qtd = 0;

function gerarBaralho(){

    for( let i = 0; i < qtd/2; i++){
        let carta = cartas [i];
        baralho.push(carta)
        baralho.push(carta);
    }

    baralho.sort(comparador).

    distribuirCartas()
}

*/
function virarCarta(carta) {
    const carta1 = carta.querySelector(".carta1");
    carta1.classList.toggle("front");

    const carta2 = carta.querySelector(".carta2");
    carta2.classList.toggle("back");
  }

