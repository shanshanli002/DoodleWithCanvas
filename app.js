window.addEventListener("load", () => {
    const enter = document.querySelector('#enterdoodle');
    const doodlebox =document.querySelector('#doodlebox');
    const background = document.querySelector('#bbackground');
    const canvas = document.querySelector('#canvas');
        //context can be 2d or 3d
    const context = canvas.getContext('2d');
        
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    
    //drawing styles

//check if the user is doodling, if so then canvas will display the doodle.
function startPosition(e) {
    isDoodling = true;
    drawing(e);
};
function drawing(e){
    if(isDoodling !== true)
        return; 
         console.log('doodling');
     context.lineWidth = 5;
     context.lineCap = 'round';
     context.strokeStyle = "black";
     context.lineTo(e.clientX, e.clientY);
     context.stroke();
     context.beginPath();
     context.moveTo(e.clientX, e.clientY);
     
};
function stopPosition(){
    isDoodling = false;
    context.beginPath();
};

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mousemove', drawing);
canvas.addEventListener('mouseup', stopPosition);




//click enter will reveal canvas and blur background
enter.addEventListener('click', () => {
console.log('you clicked enter');
doodlebox.classList.remove('interactivesectionhidden');
doodlebox.classList.add('interactivesection');
background.classList.remove('bbackground');
background.classList.add('blur');




//canvas revealed will allow event listener to be applied to close button
const closedoodle = document.querySelector('#closedoodle');
//click exit button
    closedoodle.addEventListener('click', () => {
    doodlebox.classList.add('interactivesectionhidden');
    doodlebox.classList.remove('interactivesection');
    background.classList.add('bbackground');
    background.classList.remove('blur');
    });

});





});
