const priceButtons =document.getElementsByClassName("priceTag");
for (let index = 0; index < priceButtons.length; index++) {
    const element = priceButtons[index];
    element.addEventListener("click", alert("is working"));
}