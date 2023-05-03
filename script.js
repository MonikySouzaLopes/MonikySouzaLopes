// divListaProduto.insertAdjacentHTML('afterbegin', '');//

class Produto {
    constructor(nome,Datacadastro, descricao ,preco){
         this.nome = nome;
         this.Datacadastro = Datacadastro;
         this.descricao = descricao;
         this.preco = preco;
}

mostrar_produtos(){
 return this.nome + this.Datacadastro + this.descricao + this.preco
}

}

class ProdutoDestaque extends Produto{
constructor(nome,Datacadastro, descricao ,preco , img){
super(nome,Datacadastro, descricao ,preco)
this.img = img;
}
mostrar_produtos_destaque(){
    return `<div> ${this.nome}</div>
           <div> ${this.Datacadastro}</div>
           <div> ${this.descricao}</div>
           <div> ${this.preco}</div>
           <div> ${this.img}</div>`

}

}
const produto = new Produto("Secador","10/08/2022","seca cabelo",300)
console.log(produto.mostrar_produtos())
 
const produtoDestaque = new ProdutoDestaque("Modelador de cachos","10/08/2022","modelar o cabelo em cachos",250,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2NHE97lNTWvaTCY1U_kCa82Y438PLU_e1jg&usqp=CAU")
console.log(produtoDestaque.mostrar_produtos_destaque())

const div = document.getElementById("produto-destaque")
div.insertAdjacentHTML('afterbegin', produtoDestaque.mostrar_produtos_destaque());
