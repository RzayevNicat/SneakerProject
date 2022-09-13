const counter = document.querySelector(".counter")
const nav= document.querySelector(".nav")
const counterPlus = document.querySelector(".plus")
const counterMinus = document.querySelector(".minus")
const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content")
const submitBtn = document.querySelector(".submit-btn")
const emptyCart = document.querySelector(".cart-body-2")
const checkout = document.querySelector(".checkout");
const check = document.querySelector(".check")
const counterShop = document.querySelector(".counter-shop");
const img1 = document.querySelector(".img-1")
const img2 = document.querySelector(".imgg-2")
const img3 = document.querySelector(".imgg-3")
const img4 = document.querySelector(".imgg-4")
const img5 = document.querySelector(".imgg-5")
eventListeners();

function eventListeners(e){
    nav.addEventListener("click",displayStore)
}

function displayStore(e){
    console.log(e.target.className);
    if(e.target.className==="fa-sharp fa-solid fa-cart-shopping"){
        if(dropdownContent.style.display==="flex"){
            dropdownContent.style.display="none";
        }
        
        else{
            dropdownContent.style.display="flex";
        }
    }


}
// dropdown.addEventListener("click",()=>{
//     dropdownContent.style.display="block";
// })
let count = 0;

updateDisplay();

counterPlus.addEventListener("click",()=>{
    count++;
    updateDisplay();
    
});

counterMinus.addEventListener("click",()=>{
    count--;
    updateDisplay();

});
function updateDisplay(){
    counter.innerHTML=count;
    counterShop.innerHTML=`${count}`
}
submitBtn.addEventListener("click",()=>{
    emptyCart.innerHTML=`
    <div>
        <img src="images/image-product-1-thumbnail.jpg" alt="">
    </div>
    <div class="filled-cart">
        <p>Fall Limited Edition Sneakers <br> $125 x ${count} </p> <h3>$ ${125*count}</h3>
    </div>
    
    
    `
    checkout.innerHTML=`
        <button class="check">Checkout</button>
    
    `
})
checkout.addEventListener("click",()=>{
    dropdownContent.style.display="none";
})
img2.addEventListener("click",()=>{
    img1.innerHTML=`
    <img src="images/image-product-1.jpg" alt="">
    `
})
img3.addEventListener("click",()=>{
    img1.innerHTML=`
    <img src="images/image-product-2.jpg" alt="">
    `
})
img4.addEventListener("click",()=>{
    img1.innerHTML=`
    <img src="images/image-product-3.jpg" alt="">
    `
})
img5.addEventListener("click",()=>{
    img1.innerHTML=`
    <img src="images/image-product-4.jpg" alt="">
    `
})

