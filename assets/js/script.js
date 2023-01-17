let lastScroll = 0;
const navbar = document.querySelector("#navbar");

// navbar disparition
window.addEventListener('scroll', (e) =>{
    if(window.scrollY < lastScroll){
        navbar.style.top = "0px";
    }else{
        navbar.style.top = "-80px";
    }
    lastScroll= window.scrollY;
});


window.addEventListener("scroll", (e) => {

let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight; // multiplier par 100 si % désiré    

//text-accueil
    if(scrollValue > 0.25 ){
        actext.style.opacity = 1;
        actext.style.transform ="none";
    }

// img accueil
    if(scrollValue > 0.30){
        acimg.style.opacity = 1;
        acimg.style.transform = 'none';
    }
    
});

// mobile menu disparait onclick
const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
    link.addEventListener('click',(e)=>{
        setTimeout(() => {
        closebtn.click()  ;
        }, 400);
    })
});


const cards = document.querySelectorAll(".card");

cards.forEach(card =>{
    card.addEventListener('click', ()=>{
        let cardactive = card.classList.toggle('cardactive'); 
        if (cardactive === true){
            kebab1.style.opacity=1;
            kebab1.style.transition= '0.5s ease-out' 
        } else{
            kebab1.style.opacity = 0;
            kebab1.style.transition ='0s'
        }  
    });
})