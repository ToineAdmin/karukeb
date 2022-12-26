let lastScroll = 0;
const navbar = document.querySelector("#navbar")

window.addEventListener('scroll', (e) =>{
    if(window.scrollY < lastScroll){
        navbar.style.top = "0px";
    }else{
        navbar.style.top = "-80px";
    }
    lastScroll= window.scrollY;
});