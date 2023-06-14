// divListaProduto.insertAdjacentHTML('afterbegin', '');//

class MeuErro extends Error {
    constructor(message){
      super(message);
      this.name = "Meu Erro";
    }
  }

class Produto {
    constructor(nome,Datacadastro, descricao ,preco){
         this.nome = nome;
         this.Datacadastro = Datacadastro;
         this.descricao = descricao;
         this.preco = preco;
}

mostrarAtributos() {
    try {
      return this.mostrar_produtos();
    } catch (error) {
      return error
    }
  }
  mostrar_produtos(){
    if (this.nome != "" && this.Datacadastro != "" && this.descricao != "" && this.preco != ""){
        return    `
        <div class= "descricao"> <strong>${this.nome}</strong></div>
       <div class= "descricao">  Data de cadastro: ${this.Datacadastro}</div>
       <div class= "descricao"> Descrição: ${this.descricao}</div>
       <div class= "descricao"> <strong>R$${this.preco},00</strong></div>
      <br>
      `
    }
    else {
        throw new MeuErro("Está faltando algum atributo")
    }
    }
    
}
 

class ProdutoDestaque extends Produto{
constructor(nome,Datacadastro, descricao ,preco , img){
super(nome,Datacadastro, descricao ,preco)
this.img = img;
}

mostrarAtributosDestaque() {
    try {
      return this.mostrar_produtos_destaque();
    } catch (error) {
      return error
    }
  }

mostrar_produtos_destaque(){
    if (this.nome != "" && this.Datacadastro != "" && this.descricao != "" && this.preco != "" && this.preco != "" ){
    return `
           <center><img src= "${this.img}"/></center>
           <div class= "descricao"> <strong>${this.nome}</strong></div>
           <div class= "descricao">  Data de cadastro: ${this.Datacadastro}</div>
           <div class= "descricao"> Descrição: ${this.descricao}</div>
           <div class= "descricao"> <strong>R$${this.preco},00</strong></div>
           `
}
else {
    throw new MeuErro("Está faltando algum atributo")
}

}
}

 
const produtoDestaque = new ProdutoDestaque("Modelador de cachos","10/08/2022","Modelador de Cachos Mondial, Spiral Infinity, Bivolt, Preto/Vermelho - EM-05",250,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2NHE97lNTWvaTCY1U_kCa82Y438PLU_e1jg&usqp=CAU")
console.log(produtoDestaque.mostrarAtributosDestaque())

const produtoLista = new Produto("Secador de cabelo","10/10/2022","Secador de Cabelo Profissional Fox Íon Prata 2.000W Taiff",486)
console.log(produtoLista.mostrarAtributos())

const produtoLista2 = new Produto("Chapinha","22/08/2022","Chapinha/Prancha de Cabelo Philips Essential - BHS378/00 Cerâmica e com Íons 230C",155)
console.log(produtoLista2.mostrarAtributos())

const produtoLista3 = new Produto("Escova Alisadora ","15/05/2022","Escova Alisadora Britânia Soft Bec07r Biv 1300w Profissional",857)
console.log(produtoLista3.mostrarAtributos())

const div = document.getElementById("produto-destaque")
div.insertAdjacentHTML('afterbegin', produtoDestaque.mostrar_produtos_destaque());

const div1 = document.getElementById("lista-produto")
div1.insertAdjacentHTML('afterbegin', produtoLista.mostrar_produtos());

const div2 = document.getElementById("lista-produto")
div2.insertAdjacentHTML('afterbegin', produtoLista2.mostrar_produtos());

const div3 = document.getElementById("lista-produto")
div3.insertAdjacentHTML('afterbegin', produtoLista3.mostrar_produtos());