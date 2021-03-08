//Criar array itens
var itens = [];

//Pega oa valores digitados nos campos de texto nome e valor do produto
document.querySelector('input[type=submit]')
.addEventListener('click',() => {
    var nomeProduto = document.querySelector('input[name=nome_produto]').value;
    var precoProduto = document.querySelector('input[name=valor_produto]').value;
   
    //Cadastra o produto
    itens.push({
        nome: nomeProduto,
        valor: precoProduto
    });

    let listaProdutos = document.querySelector('.lista-produtos');  
    let soma = 0;  
    listaProdutos.innerHTML = "";
    itens.map(function(val){
        soma+=parseFloat(val.valor);
        listaProdutos.innerHTML+= 
        `<div class="lista-produto-single">
        <h3>`+val.nome+`</h3>
        <h3 class="price-produto"><span>R$`+val.valor+`</span></h3>
       </div>`;
    })
    soma = soma.toFixed(2);
    nomeProduto = "";
    precoProduto = "";

    let elementoSoma = document.querySelector('.soma-produto h1');
    elementoSoma.innerHTML = 'R$' +soma;    

})

document.querySelector('button[name=limpar]')
.addEventListener('click',() =>{
    itens = [];

    document.querySelector('.lista-produtos').innerHTML = "";
    document.querySelector('.soma-produto h1').innerHTML = "R$0";
})