class BotaoGerenciador {
  constructor(texto, x, y) {
    this.texto = texto
    this.x = x 
    this.y = y
    
    this.botao = createButton(this.texto)
    this.proximoEstado = 'jogo'
  }
  
  draw() {
    //this.botao.center(this.x / 80)
    this.botao.position(this.x, this.y)
    this.botao.addClass('botao-tela-inicial')
    this.botao.mousePressed(() => this.alteraCena())
  }
  
  alteraCena() {
    this.botao.remove()
        cenaAtual = 'historia';
        somBotao.play()
  }
}