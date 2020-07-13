class Personagem {
  
  constructor(imagem,x, variacaoY,largura,altura,larguraSprite,alturaSprite){
    this.imagem = imagem
    this.largura = largura
    this.altura = altura
    this.x = x
    this.variacaoY = variacaoY
    this.yInicial = height - this.altura - this.variacaoY
    this.y = this.yInicial
    this.larguraSprite = larguraSprite
    this.alturaSprite = alturaSprite
    this.velocidadeDoPulo = 0
    this.alturaDoPulo = -29
    this.pulos = 0
    this.gravidade = 2
    this.invencivel = false;
  }
  
  exibe(){
    image(this.imagem,this.x,this.y,this.variacaoY,this.largura,this.altura,this.larguraSprite,this.alturaSprite)
  }
  
  pula(){
    if(this.pulos < 2){
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos++
    }
  }
  
  andaParaTras(){
    this.x = this.x - 20
  }
  
  andaParaFrente(){
    this.x = this.x + 20
  }
  
  aplicaGravidade(){
    this.y = this.y + this.velocidadeDoPulo
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade
    
    if(this.y > this.yInicial){
      this.y = this.yInicial
      this.pulos = 0
    }
  }
  
  tornarInvencivel(){
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false
    },1000)
  }
  
  estaColidindo(inimigo){
    
    if(this.invencivel){
      return false
    }
    
    const precisao = 0.7;
    const colisao = collideRectRect(
                    this.x, 
                    this.y, 
                    this.largura * precisao,
                    this.altura * precisao,
                    inimigo.x, 
                    inimigo.y, 
                    inimigo.largura * precisao,
                    inimigo.altura * precisao
                  );
    
    return colisao;
  }
}