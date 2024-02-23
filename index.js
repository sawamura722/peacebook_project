window.addEventListener("scroll", function(){
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 50)
})

var NavBar =  document.getElementById("NavBar")

function showMenu(){
  NavBar.style.left = "-15px";
}

function hideMenu(){
  NavBar.style.left = "-300px";
}

let slideIndex = 0;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  // Check if slides is not undefined and has a length property
  if (slides && slides.length) {
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;

    // Reset slideIndex if it exceeds the number of slides
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
  }

  // Schedule the next iteration
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// Call the function to start the slideshow
showSlides();

/*-------------------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", function () {
  const cartquan = document.getElementById("quantityz");
  const cartbtns = document.querySelectorAll(".buy-button");

  let quan = 0;
  let cartProducts = [];

  Array.from(cartbtns).forEach((cartbtn) => {
    cartbtn.addEventListener("click", function (event) {
      event.preventDefault();

      quan++;
      cartquan.innerHTML = quan;

      // Get the product ID and category from the button's data attributes
      let productId = cartbtn.getAttribute("data-id");
      let category = cartbtn.getAttribute("data-category");

      // Fetch the product data from the JSON file
      fetch('products.json')
        .then(response => response.json()) //Once you get the response, extract the JSON data from it.
        .then(data => {
          // Find the selected product based on the product ID and category
          let selectedProduct;

          switch (category) {
            case "bestseller":
              selectedProduct = data.bestseller_products.find(product => product.id === parseInt(productId));
              break;
            case "education":
              selectedProduct = data.education_products.find(product => product.id === parseInt(productId));
              break;
            case "advice":
              selectedProduct = data.advice_products.find(product => product.id === parseInt(productId));
              break;
            case "business":
              selectedProduct = data.business_products.find(product => product.id === parseInt(productId));
              break;
            case "fiction":
              selectedProduct = data.fiction_products.find(product => product.id === parseInt(productId));
              break;
            default:
              // Handle other categories if needed
          }
          // Add the selected product to the shopping cart
          cartProducts.push(selectedProduct);

          // Update the shopping cart display or perform any other actions
          updateCartDisplay();

          
        });
    });
  });

  function updateCartDisplay() {
    // Add your code here to update the cart display

    console.log("Cart updated:", cartProducts);
  }
});

var nextbtn = document.getElementById("nextbtn");
var logincontent = document.getElementById("logincontent");
var logininput = document.getElementById("logininput");

nextbtn.onclick = function(){
  logincontent.textContent = logininput.value;
  nextbtn.textContent = "Sign in";
  logininput.value = "";
  logininput.placeholder = "Enter your password";
};
