//Criando um carro de compras;

//Declarando um array vazio
const shoppingCart = [];

//Usando função "push" para adicionar os itens ao array "shoppingCart"
function addItemToCart(item){
    shoppingCart.push(item);
}

//Descobrindo se existe o item no carrinho e removendo caso exista
function removeItemFromCart(item){
    const index = shoppingCart.indexOf(item);

    if(index !== -1){
        shoppingCart.splice(index,1);
    }
}

//Visualizando os itens do carrinho
function viewCart(){
    if(shoppingCart.length == 0){
        console.log("Your shopping Cart is empty")
    }else{
        console.log("Itens in your shopping cart:  ")
        for(let i = 0; i < shoppingCart.length; i++){
            console.log(`${i + 1} - ${shoppingCart[i]}`)
        }
    }
}

//Limpando todo o carrinho
function clearCart(){
    shoppingCart.length = 0;
    console.log("Your shopping cart has been cleared");
}

addItemToCart("Tennis");
addItemToCart("T-shirt");
addItemToCart("Short");

viewCart();


removeItemFromCart("T-shirt");

viewCart();

clearCart();

viewCart();