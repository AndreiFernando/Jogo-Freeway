//ator

let yAtor = 366;
let xAtor = 88;
let colisao = false;
let pontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3; 
  } if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 3;
    }
  }
}

function verificaColicao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if(colisao) {
    voltaAtorPosicaoInicial();
      somColisao.play();
      if(pontosMaiorQueZero()){
      pontos -= 1;
      }
    }
  }
}

function voltaAtorPosicaoInicial(){
  yAtor = 366;
}

function incluirPontos(){
  fill(color(250, 255, 150));
  textAlign(CENTER);
  textSize(25);
  text(pontos, width / 5, 27);
}

function marcarPonto(){
  if(yAtor < 15) {
    pontos += 1;
    voltaAtorPosicaoInicial();
     somPontos.play();
  }
 
}

function pontosMaiorQueZero(){
  return pontos > 0
}

function podeSeMover(){
return yAtor < 366;  
}