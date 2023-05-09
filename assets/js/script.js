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

// ------ APPARITION BOX TIME LINE ------
const allBoxes = document.querySelectorAll('.box');
let boxPositions = [
    {position: 'calc(50% - 270px)', threshold: 0.62},
    {position: 'calc(50% + 270px)', threshold: 0.65},
    {position: 'calc(50% - 270px)', threshold: 0.69},
    {position: 'calc(50% + 270px)', threshold: 0.75},
];

function handleScroll() {
    const scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    
    allBoxes.forEach((box, index) => {
        const boxPosition = boxPositions[index];
        if (scrollValue > boxPosition.threshold) {
            setBoxStyle(box, 1, boxPosition.position);
        }
    });
}

function setBoxStyle(box, opacity, position) {
    box.style.opacity = opacity;
    box.style.left = position;

}

if(window.matchMedia("(max-width : 1000px)").matches) {
    boxPositions = [
        {position: 'calc(50% - 60px)', threshold: 0.62},
        {position: 'calc(50% - 60px)', threshold: 0.65},
        {position: 'calc(50% - 60px)', threshold: 0.69},
        {position: 'calc(50% - 60px)', threshold: 0.71},
    ]
 }

 if(window.matchMedia("(max-width : 530px)").matches) {
    boxPositions = [
        {position: '50%', threshold: 0.67},
        {position: '50%', threshold: 0.71},
        {position: '50%', threshold: 0.75},
        {position: '50%', threshold: 0.79},
    ]
 }
 

window.addEventListener('scroll', handleScroll);



// mobile menu disparait onclick
const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
    link.addEventListener('click',(e)=>{
        setTimeout(() => {
        closebtn.click()  ;
        }, 400);
    })
});


const elementsUnset = document.querySelectorAll('.unset-left, .unset');


window.addEventListener('scroll', checkElements);


function checkElements(){
    const trigger = window.innerHeight / 5 * 4;
    elementsUnset.forEach(element =>{
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < trigger){
           element.classList.add('show'); 
        }
    })
}

checkElements();