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
    return `
           <center><img src= "${this.img}"/></center>
           <div class= "descricao"> ${this.nome}</div>
           <div class= "descricao">  Data de cadastro :${this.Datacadastro}</div>
           <div class= "descricao"> Descrição ${this.descricao}</div>
           <div class= "descricao"> R$${this.preco},00</div>
           `
         

}

}
const produto = new Produto("Secador","10/08/2022","seca cabelo",300)
console.log(produto.mostrar_produtos())
 
const produtoDestaque = new ProdutoDestaque("Modelador de cachos","10/08/2022","Modelador de Cachos Mondial, Spiral Infinity, Bivolt, Preto/Vermelho - EM-05",250,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2NHE97lNTWvaTCY1U_kCa82Y438PLU_e1jg&usqp=CAU")
console.log(produtoDestaque.mostrar_produtos_destaque())

const produtoLista = new ProdutoDestaque("Secador de cabelo","10/08/2022","Modelador de Cachos Mondial, Spiral Infinity, Bivolt, Preto/Vermelho - EM-05",250,"https://a-static.mlcdn.com.br/800x560/secador-de-cabelo-profissional-fox-ion-prata-2-000w-taiff/mebabocom/0247-secadorfox220v-01/dd950697e92abcd3e69fb6a05e9f357f.jpeg")
console.log(produtoDestaque.mostrar_produtos_destaque())

const div = document.getElementById("produto-destaque")
div.insertAdjacentHTML('afterbegin', produtoDestaque.mostrar_produtos_destaque());

const div1 = document.getElementById("lista-produtos")
div.insertAdjacentHTML('afterbegin', produtoLista.mostrar_produtos_destaque());