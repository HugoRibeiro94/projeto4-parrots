let qtd = 0;

const tipoCartas = [//array das imagens
    'bobrossparrot',
    'explodyparrot',
    'fiestaparrot',
    'metalparrot',
    'revertiparrot',
    'tripletsparrot',
    'unicornparrot'
]

let baralho = [];//baralho a ser renderizado

//passo1: receber a quatidade de cartas do usuario
function perguntarQtdeCartas(){//perguntar ao usuario o numero de cartas

    qtd = Number(prompt('Digite a quantidade de cartas:'));

    while( qtd <4 || qtd > 14 || qtd%2===1){
    qtd = Number(prompt('Digite a quantidade de cartas:'));
    }

    adicionarBaralho();
    
}

perguntarQtdeCartas()

//passo2: guardar essa quantidade dentro de uma array

function adicionarBaralho(){
   
    for( let i = 0; i < qtd/2; i++){//duplicando
        let addCartas = tipoCartas[i];
        baralho.push(addCartas);
        baralho.push(addCartas);
    }

//passo3: emabaralhar esse array
    baralho.sort(comparador);//embaralhando a array baralho depois de duplicar

    renderizarCartas();
    console.log(baralho);
}

function comparador() { 
	return Math.random() - 0.5; 
}

//passo4: mostrar no HTML
function renderizarCartas(){//colocando as cartas no HTML

    
    const cartas = document.querySelector('.container-carta')
    
    for( let i = 0; i < qtd; i++){
        cartas.innerHTML += `
        <div onclick="virarCarta(this)" class="card" data-test="card">
            <div class="carta1 face">
                <img data-test="face-down-image" src="back.png">
            </div>
            <div class="carta2 back-face face">
                <img  data-test="face-up-image" src="${baralho[i]}.gif">
            </div>
        </div>`
    }
    console.log(cartas);
}

function virarCarta(carta) {
    const carta1 = carta.querySelector(".carta1");
    carta1.classList.toggle("front");

    const carta2 = carta.querySelector(".carta2");
    carta2.classList.toggle("back");
  }

