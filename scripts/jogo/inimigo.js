class Inimigo extends Animacao{
  constructor(imagem,x,variacaoY,largura,altura,larguraSprite, alturaSprite, velocidade){
    super(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
    
    this.velocidade = velocidade
    this.x = width
  }
  
  move(){
    this.x = this.x - this.velocidade
  }
  
  aparece(){
    this.x = width
  }
}