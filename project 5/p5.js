// button pr event listener of click lgana padega
// usme function dalenge to operate
// but need to change color on every second

// generate random color
const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0; i<6 ;i++){
        color+= hex[Math.floor(Math.random() * 16)]
    }
    return color;
};
let changeStrt
const changingColor = function(){

    if(changeStrt==null){
        changeStrt = setInterval(changeBgColor , 1000);
    }
    
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor()
    }

} ;  

const stopChangingColor = function(){
    clearInterval(changeStrt)
    changeStrt=null; // derefernce 
}    

document.querySelector('#start').addEventListener('click' , changingColor)
document.querySelector('#stop').addEventListener('click' , stopChangingColor)