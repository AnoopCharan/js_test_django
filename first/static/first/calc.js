let result = 0
let render = document.getElementById("render")
 

console.log(render + 2)
console.log()
function add() {
    let num1 = Number(document.getElementById("num1_id").value) 
    let num2 = Number(document.getElementById("num2_id").value)
    result = num1+num2
    console.log(result)
    render.textContent= "Result: " + result

}

function sub() {
    let num1 = Number(document.getElementById("num1_id").value) 
    let num2 = Number(document.getElementById("num2_id").value)

    result = num1 - num2 
    console.log(result)
    render.textContent= "Result: " + result
    
}

function multiply() {
    let num1 = Number(document.getElementById("num1_id").value) 
    let num2 = Number(document.getElementById("num2_id").value)

    result = num1 * num2 
    console.log(result)
    render.textContent= "Result: " + result
    
}