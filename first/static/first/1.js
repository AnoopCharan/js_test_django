// document.getElementById("counter").innerText =5

// let human

// intializer count as 0
// listen for clicks on button
// increment count by 1 when button is pressed
// change inner html of counter 

// string + int is always string

let count =0
let counter = document.getElementById("counter")
let previous = []
let prev_saved = document.getElementById("previous_div")
prev_saved.textContent = "Previously saved : "
console.log(prev_saved.textContent)
console.log(prev_saved.innerText)
function increment(){
    console.log("increased")
    count +=1
    counter.textContent= count;
}

function decrement(){
    console.log("decresed")
    count-=1
    counter.textContent=count;
}

function save(){
    console.log(count);
    previous.push(count);
    // console.log(previous.at(-1))
    prev_saved.textContent += " - "
    prev_saved.textContent += previous.at(-1)
    

    count = 0
    counter.textContent = 0
}

