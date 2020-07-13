class TelaInicial {
  constructor() {
    this.x = width / 2;
    this.y = height
  }

  draw() {
    this._fundo()
    this._texto()
    this._botao()
    
  }
  
  _fundo() {
      image(imagemTelaInicial, 0, 0, width, height)
  }
  
  _texto() {
    image(imagemFonte, width/9.5, height/3.5 )
    
  }
  
  _botao() {
    botaoGerenciador.x = width / 7*4.5
    botaoGerenciador.y = height / 7 * 3
    botaoGerenciador.draw()
    
  }
}