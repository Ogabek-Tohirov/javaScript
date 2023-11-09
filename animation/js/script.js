'use strict';

// setTimeout(() => {
//     console.log('hello');
// }, 3000);

const btn = document.querySelector('#move_btn');

// let timerDD

// btn.addEventListener('click', () => {
//     timerDD = setTimeout (logger, 3000);
// })

// function logger() {
//     console.log('hello')
// }


// let timeoutID;
// let outputConttext;

// function setOutput(outputContent) {
//     document.querySelector("#output").textContent = outputContent;
// }

// function delayedMessage() {
//     setOutput("");
//     timeoutID = setTimeout(setOutput, 2*1000, "That aws really slow!");
// }

// function clearMessage() {
//     const remover = document.querySelector('.removeBtn')

//     remover.removeEventListener('click', () => {
//         remover(timeoutID)
//     })
// }

function myAnimation() {
    const car = document.querySelector('.car');
    let pos =0;

    const timerId = setInterval(frame, 10);

    function frame() {
        if(pos === 700) {
            clearInterval(timerId);
        }
        else {
            pos++;
            car.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);