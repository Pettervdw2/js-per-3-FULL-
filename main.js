console.log("Het Werkt!");


const logo = document.querySelector(".h-img")
logo.addEventListener("click", function () {
    window.location = "index.html";
});


function makePricesClickable(){

    const Yprice = document.querySelectorAll(".price");
    console.log(Yprice)
    for (let index = 0; index < Yprice.length; index++) {
        const price = Yprice[index];
        price.addEventListener("click", function () {
            Swal.fire({
                title: "Thank you!",
                text: "Added item to cart!",
                icon: "success"
              });
        });
    }
    console.log("test 2");
}
    
