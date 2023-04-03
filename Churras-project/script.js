//* Sempre antes de  se iniciar um projeto é necessário saber aonde quer chegar e oque se busca.
//* Nesse projeto eu busco calcular qual a quantidade de bebida e comida que eu preciso para fazer um churrasco, dependendo do numero de pessoas, se sao adultas ou crianças, e quanto tempo o churrasco ira durar.

//* Carne - 400gr por pessoa + de 6 horas - 650gr
//* Cerveja - 1200ml por Pessoa + de 6 horas - 2000ml
//* Refrigerante/agua - 1000ml por pessoa + de 6 horas - 1500ml
//* crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

function calcular() {
  console.log("calculando ...");

  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas;
  let qtdTotalCerveja = cervejaPP(duracao) * adultos;
  let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2) * criancas;

  resultado.innerHTML = `<p>${qtdTotalCarne/1000} Kg de Carne</p>`
  resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/355)} latas de Cerveja</p>`
  resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas/2000)} Pet's 2l de Bebidas</p>`


}

function carnePP(duracao) {
  if (duracao >= 6) {
    return 650;
  } else {
    return 400;
  }
}

function cervejaPP(duracao) {
  if (duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
      return 1500;
    } else {
      return 1000;
    }
  }
