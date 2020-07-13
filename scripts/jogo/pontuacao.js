class Pontuacao{
  constructor(){
    this.pontos = 0 ;
  }
  exibe(){
    textAlign(RIGHT);
    fill('#fff');
    textSize(50);
    textFont(fonteTelaInicial)
    text(parseInt(this.pontos), width - 30, 50);
  }
  
  adicionarPonto(){
    this.pontos = this.pontos +0.2;
    //console.log(this.pontos)
    if(this.pontos == 1500.000000000204){
      
      cenaAtual = 'final'
      
    }
    
  }
  
  
}