class Jogo {

    constructor() {
    this.indice = 0
    this.mapa = fita.mapa
  }
  
  setup() {
    cenario = new Cenario(imagemCenario,1)
    pontuacao = new Pontuacao()
    vida = new Vida(fita.configuracoes.vidaMaxima,
                   fita.configuracoes.vidaInicial);
    personagem = new Personagem(imagemPersonagem, -10, 110, 80, 1, 30, 240)
    const inimigoParado1 = new Inimigo (imagemInimigoParado1, width - 5, 50.3, 100, 60, 60, 55, 2)
    const inimigoParado2 = new Inimigo(imagemInimigoParado2, width - 5, -19.7, 130, 140, 140, 150, 2.5)
    //inimigoPassaro = new Inimigo(imagemInimigoPassaro, width - 5, 80, 90, 80,80, 55, 3)
    const inimigoSkate = new Inimigo (imagemInimigoSkate, width - 80, 30, 100, 75, 20, 30, 7)
    const virus = new Inimigo (imagemVirus, width - 5, 20, 120, 90.5, 20, 30, 5)
    
    inimigos.push(inimigoParado1)
    inimigos.push(inimigoParado2)
    inimigos.push(virus)
    
  }

    keyPressed(key) {
      if (key === 'ArrowUp') {
        personagem.pula()
        somDoPulo.play()
      }
      if(key == 'ArrowLeft'){
        personagem.andaParaTras()
      }
      if(key == 'ArrowRight'){
        personagem.andaParaFrente()
      }
      
    }

  draw() {
     cenario.exibe()
     cenario.move()
    vida.draw();
    pontuacao.exibe()
    pontuacao.adicionarPonto()
     
    
    const linhaAtual = this.mapa[this.indice]
    const inimigo = inimigos[linhaAtual.inimigo]
    const inimigoVisivel = inimigo.x < -inimigo.largura
    
    inimigo.velocidade = linhaAtual.velocidade;
    
    inimigo.exibe()
    inimigo.move()
    
    
    if(inimigoVisivel) {
      this.indice++
      inimigo.aparece()
      if(this.indice > this.mapa.length - 1) {
        this.indice = 0
      }
    }

    if (personagem.estaColidindo(inimigo)) {
      
      vida.perdeVida()
      personagem.tornarInvencivel()
      if(vida.vidas==0){
        image(imagemGameOver, width/2 - 200, height/2.5)
        noLoop()
          
         }
    }
      
     personagem.exibe()
     personagem.aplicaGravidade()
  }

}