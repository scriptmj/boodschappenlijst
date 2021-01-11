document.querySelectorAll('input').forEach(item => {
    item.addEventListener('change', updateValue);
})

function updateValue(value){
    const prices = document.getElementsByClassName('productPrice');
    const quantities = document.getElementsByClassName('productQuantity');
    const totalProductCost = document.getElementsByClassName('productTotalCost');
    const totalCost = document.getElementsByClassName('totalCost');
    let totalPrice = 0;
    for(i = 0 ; i < quantities.length ; i++){
        totalProductCost[i].textContent = (quantities[i].value * prices[i].textContent).toFixed(2);
        totalPrice += quantities[i].value * prices[i].textContent;
    }
    totalCost[0].textContent = totalPrice.toFixed(2);
}