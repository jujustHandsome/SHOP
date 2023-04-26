let quantity = 1;
let qty = 1;
let subtotal = 1587;
let total = 0;

function addQuantity() {
    quantity = quantity + 1;
    qty = qty + 1;
    subtotal = subtotal + 1587;
    total = subtotal + 50;
    
    document.getElementById('quantity').innerHTML = quantity;
    document.getElementById('qty').innerHTML = qty;
    document.getElementById('subtotal').innerHTML = subtotal;
    document.getElementById('total').innerHTML = total;
    console.log(quantity);
    console.log(subtotal);
    console.log(total);

    if(quantity == 11){
        alert("You reached the limit")
    }
}
function subQuantity() {
    quantity = quantity - 1;
    qty = qty - 1;
    subtotal = subtotal - 1587;
    total = total - 50;
    
    document.getElementById('quantity').innerHTML = quantity;
    document.getElementById('qty').innerHTML = qty;
    document.getElementById('subtotal').innerHTML = subtotal;
    document.getElementById('total').innerHTML = total;
    console.log(quantity);
    console.log(subtotal);
    console.log(total);

    if(quantity <= 0){
        alert("Please Buy!")
    }
}
