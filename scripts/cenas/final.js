class Final{
  
  constructor(){
    this.x = width / 2;
    this.y = height
  }
  
  setup(){
    tela1 = new Cenario(imagemFinal, 3);
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
    this._fundoFinal();
    this._textoFinal();
    
  }
  
  _fundoFinal(){
    image(imagemFinal, 0,0,width,height);
  }
  
  _textoFinal(){
   image(venceu, width / 7.3, height/9 )
 
  }
  
  
  

}