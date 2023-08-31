alert("Welcome to RGSS calculator")

const screenDisplay = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')
// console.log(buttons)



// backspace
function back() {
    var value = document.getElementById("d").value;
    document.getElementById("d").value = value.substr(0, value.length - 1);
}


// ;;;;;;;
let calculation =[]
let accumulativeCalculation=[]

function calculate(button){
    // console.log(button)
    const value = button.textContent
    if( value =='CLEAR'){
        calculation =[]
        screenDisplay.textContent='0'
    }else if(value=== '='){
        screenDisplay.textContent=  eval(accumulativeCalculation)


    }else if(value=='DEL'){
        calculation.pop(value)
        screenDisplay.textContent=screenDisplay.textContent.slice(0, -1,);
    }
    else {
        calculation.push(value)
    accumulativeCalculation = calculation.join('')
    screenDisplay.textContent =accumulativeCalculation
    }



    // calculation.push(value)
    // accumulativeCalculation = calculation.join('')
    // screenDisplay.textContent =accumulativeCalculation

    // console.log(calculation )


}

buttons.forEach(button => button.addEventListener('click',()=>calculate(button) ))