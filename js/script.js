let cartIcon = document.querySelector(".cart-icon");
let cartDetails = document.querySelector(".cart");
let closeCart = document.querySelector(".close-cart");

cartIcon.addEventListener("click", () => {
    cartDetails.classList.add("displayCart");
});

closeCart.addEventListener("click", () =>{
    cartDetails.classList.remove("displayCart")
})



