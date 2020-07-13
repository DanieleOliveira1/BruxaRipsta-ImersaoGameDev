class Historia{
   constructor() {
    this.x = width / 2;
    this.y = height
  }
  
 setup(){
    tela = new Cenario(imagemTelaInicial, 3);
  }
  
  
   keyPressed(key){
    if(key == 'Enter'){
      cenaAtual = 'jogo'
      somBotao.play()
    }
     
   }
  
  draw(){
    //tela.exibe();
    //tela.move();
    this._fundoHistoria();
    this._textoHistoria();
    
  }
  
  _fundoHistoria(){
    image(imagemTelaInicial, 0,0,width,height);
  }
  
  _textoHistoria(){
   image(imagemHistoria, width/7*3.5, height/5.5 )
  image(imagemTeclado, width / 80 * 2, height/4.5 )
  }
  
  
  
  
}