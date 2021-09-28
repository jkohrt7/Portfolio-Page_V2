/* global event listeners */
function init(){
    //mobile menu event listener
    let mobileIcon = document.querySelector("#hamburger-menu-icon");
    mobileIcon.addEventListener("click", ToggleMenu);

    //navbar scroll event listener
    let positionY = window.scrollY;
    document.addEventListener("scroll", headerFade);
}

function headerFade() {
    positionY = window.scrollY;
    console.log(positionY)
    if(positionY >= 100) {
        document.querySelector("#navbar").classList.remove("bg-opacity-0");
    }
    else {
        document.querySelector("#navbar").classList.add("bg-opacity-0");
    }
}

function ToggleMenu(e) {

}

init();