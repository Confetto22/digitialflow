const bookButtons = document.querySelectorAll(".book");
const bookMenu = document.querySelector(".book-menu");
const closeMenu = document.querySelector(".menu-close");

// for (bookButton of bookButtons) {
//     bookButton.addEventListener("click", function () {
//         //    bookButton.classList.toggle("menu-slide")
//         console.log("hello")
//    })
// }

bookButtons.forEach(button => {
    button.addEventListener("click", function () {
        bookMenu.classList.toggle("menu-slide")
    
    })
})

closeMenu.addEventListener("click", function () {
    bookMenu.classList.remove("menu-slide")
})

console.log(window.innerHeight)