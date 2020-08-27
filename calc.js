function calcQuantity() {
let price = 1000;
let quantityInput = document.querySelector("input[name='quantity-input']");
let showQuantity = document.querySelector("span.show-quantity");
let quantityNumber = parseInt(quantityInput.value);
quantityNumber = isNaN(quantityNumber) ? 0 : quantityNumber;

if (quantityNumber > 10 ) {
    alert("Maximum 10 db rendelhető!")
} else if (quantityNumber < 1) {
    alert("Minimum 1 db rendelhető!")
} else{ let quantity = quantityNumber * price;
showQuantity.innerHTML=quantity;
}
}