'use strict';

//Date  hozirgi vaqtni korsak boladi

// const now = new Date();
// console.log(now)

const start = new Date()

for(let i=0; i<10000000; i++) {
    let some = i**3
}

const end = new Date ()

console.log(`${end - start}`)

// alert(`Loop ishladi ${end - start} millisekund` )