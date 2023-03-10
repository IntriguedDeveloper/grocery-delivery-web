document.querySelector('#menuButton').addEventListener('click', (() => {
    const navMenu = document.querySelector('#menuButtonDiv');
    const brandName = document.querySelector('#brandName');
    if(navMenu.style.width == "0px"){
        navMenu.style.width = "217px";
    }
    else{
        navMenu.style.width = "0px";
    }
}));