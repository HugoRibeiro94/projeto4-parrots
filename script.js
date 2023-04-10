let qtd = prompt('Digite a quantidade de cartas:');

while( qtd <4 || qtd > 14 || qtd%2===1){
    qtd = prompt('Digite a quantidade de cartas:');
}

function virarCarta(carta) {
    const carta1 = carta.querySelector(".carta1");
    carta1.classList.toggle("front");

    const carta2 = carta.querySelector(".carta2");
    carta2.classList.toggle("back");
  }

