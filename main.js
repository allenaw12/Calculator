////variables
    //display element
    let displayCurrent = document.querySelector('span').innerText
    //event.target gets the specific target value
    let value = ''
    //num1 value, hold if operator is clicked
    let concatNums = ''
    //last operator clicked variable holder
    let operation = ''
    //after an operator is clicked, this one will display
    let display = ''

function clicky(event){
////PSUEDO CODE
    //when no operator present, clicking a number or decimal will concat with current display numbers
        //if decimal already in num, can't add second decimal
        //if concat length 10, can't add more
        //if no nums and - is pressed, change num to negative
    //when operator present
        //display will show all nums/decimals after operator from concat
        //if equals or another operator clicked-
            //if operator is - makes next num negative(still concat)
            //display shows result from function call
            //concat is now display plus operator or empty if equals was pressed
            //operator is empty or has operator if that was pressed
    value = event.target.innerText

////operator functions
    //first number will always be what's currently in display window
    //second number will come after operator button press, need way to store first number
    //when another operator or equal sign is pressed, function neeeds to run math operation
    function addition(num1, num2){
        console.log('adding'+num1 + +num2)
        return +num1 + +num2
    }
    function subtraction(num1, num2){
        console.log('subbing'+num1 - +num2)
        return +num1 - +num2
    }
    function division(num1, num2){
        console.log('dividing'+num1 / +num2)
        return +num1 / +num2
    }
    function multiplication(num1, num2){
        console.log('multing'+num1 * +num2)
        return +num1 * +num2
    }

    if(value == Number(value) || value === '.'){
        console.log('val is num')
        if(isNaN(Number(concatNums))){
            console.log('concat is nan')
            concatNums += value
            display = concatNums.split(operation)[1]
            document.querySelector('span').innerText = display
        }else{
            concatNums += value
            display += value
            document.querySelector('span').innerText = display
        }
    }else{
        if(isNaN(Number(concatNums))){
            console.log('concat is nan')
            concatNums += value
            display = concatNums.split(operation)[1]
            document.querySelector('span').innerText = display
        }else{
        if(value === ('+')){
            if(concatNums.includes('+')){
                let nums = concatNums.split('+')
                display = addition(nums[0], nums[1])
                console.log(display)
                operation = '+'
                concatNums = display.toString() + operation
                document.querySelector('span').innerText= display
                console.log(concatNums)
            }
            else{
                operation = value
                concatNums +=  operation
                display = ''
                document.querySelector('span').innerText = display
                console.log('operator')
            }
        }
        else if(value === '−'){
            console.log('minus')
            if(concatNums.includes('−')){
                let nums = concatNums.split('−')
                display = subtraction(nums[0], nums[1])
                console.log(display)
                operation = '−'
                concatNums = display.toString() + operation
                document.querySelector('span').innerText= display
                console.log(concatNums)
            }
            else{
                operation = value
                concatNums +=  operation
                display = ''
                document.querySelector('span').innerText = display
                console.log('operator')
            }
        }
    }}
    console.log(`Button clicked:${value}, Display${display}, PrevNum: ${concatNums}, Operator:${operation}`)
}

//select all li (calc buttons) and add event listener to each with loop
// let buttons = document.querySelectorAll('li')
// for(li of buttons){
//     li.addEventListener('click', clicky)
// }

//using event bubbling select parent element of all buttons(does trigger on empty space...)
document.querySelector('.button-container').addEventListener('click', clicky)