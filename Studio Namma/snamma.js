window.addEventListener('load',function(){
    let letters = document.querySelectorAll('span')

    letters.forEach((letter,idx) =>{
        setTimeout(()=>{
            letter.style.transform='scaleY(1)'
        },idx*80)
    })
})

let badacontainer = document.querySelector('.hero-section')
let container = document.querySelector('.container')
console.log(badacontainer);
console.log(container);
let previousX = 0
let previousY = 0

badacontainer.addEventListener('mousemove',(e)=>{
    let movementX = e.clientX - previousX;
    let movementY = e.clientY - previousY;

    let currentRotationX = movementX * 0.50;
    let currentRotationY = movementY * 0.50;

    container.style.display = 'block';

    //Centered transform with perspective
    container.style.transform=`
        translate3d(${e.clientX}px,${e.clientY}px,0)
        perspective(300px)
        rotateY(${currentRotationY}deg)
        rotateX(${currentRotationX}deg)
    `;

    previousX=e.clientX;
    previousY=e.clientY;

})