function setup() {
  createCanvas(windowWidth,windowHeight);
  telaInicial = new TelaInicial()
  somDoJogo.loop();
  jogo = new Jogo()
  historia = new Historia();
  final = new Final()
  cenas = {
    telaInicial,
    historia,
    jogo,
    final
  }
  jogo.setup()
   botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
}

function keyPressed(){
  
  jogo.keyPressed(key)
   historia.keyPressed(key);
  pontuacao.keyPressed(key)
}

function draw() {
  if(cenaAtual == 'jogo'){
    jogo.draw()
  }
  cenas[cenaAtual].draw() 
}

