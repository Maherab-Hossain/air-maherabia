


$( function() {
   
   
 //UP BUTTON START 
    let upbtn = document.querySelector(`.buttonup`);
    let output = document.querySelector(`.output`);
    
    function upResult() {
        let upNewValue = Number(output.value);
        upNewValue = upNewValue + 1;
        output.value = upNewValue;
        console.log(output)
    }
    
    upbtn.addEventListener(`click`, upResult);


// UP BUTTON ENDS

// // DOWN BUTTON STARTS


let downbtn = document.querySelector(`.buttondown`)


function downResult() {
    let downNewValue =Number(output.value);

    if (downNewValue == 0) {
        return false
    }

    downNewValue = downNewValue - 1;
    output.value = downNewValue;
    console.log(output)
}

downbtn.addEventListener(`click`, downResult);


// // DOWN BUTTON ENDS








    // animation js
    AOS.init();
    

})







