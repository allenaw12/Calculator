////variables
    //display element from dom
    let displayCurrent = document.querySelector('span')
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
    function addition(num){
        let nums = num.split('+')
        console.log('adding'+nums[0] , +nums[1])
        return +nums[0] + +nums[1]
    }
    function subtraction(num){
        let nums = num.split('−')
        console.log('subbing'+nums[0] , +nums[1])
        return +nums[0] - +nums[1]
    }
    function division(num){
        let nums = num.split('/')
        console.log('dividing'+nums[0] , +nums[1])
        return +nums[0] / +nums[1]
    }
    function multiplication(num){
        let nums = num.split('x')
        console.log('multing' +nums[0] , +nums[1])
        return +nums[0] * +nums[1]
    }
////if statements for button presses filter
    if(value == Number(value) || value === '.'){
        console.log('val is num')
        if(isNaN(Number(concatNums))){
            console.log('concat is nan')
            concatNums += value
            display = concatNums.split(operation)[1]
            displayCurrent.innerText = display
        }else{
            concatNums += value
            display = concatNums
            displayCurrent.innerText = display
        }
    }else{
        if(value === '+'){
            // if(concatNums.includes('+')){
            //     let nums = concatNums.split('+')
            //     display = addition(nums[0], nums[1])
            //     console.log(display)
            //     operation = '+'
            //     concatNums = display.toString() + operation
            //     document.querySelector('span').innerText= display
            //     console.log(concatNums)
            // }
            // else{
                operation = value
                concatNums +=  operation
                display = concatNums.split(operation)[0]
                displayCurrent.innerText = display
                console.log('add opp')
            // }
        }else if(value === '−'){
            operation = value
            concatNums +=  operation
            display = concatNums.split(operation)[0]
            displayCurrent.innerText = display
            console.log('minus opp')
        }else if(value === 'x'){
            operation = value
            concatNums +=  operation
            display = concatNums.split(operation)[0]
            displayCurrent.innerText = display
            console.log('multiply opp')
        }else if(value === '/'){
            operation = value
            concatNums +=  operation
            display = concatNums.split(operation)[0]
            displayCurrent.innerText = display
            console.log('divide opp')
        }else if(value === '='){
            operation = ''
            console.log('problem' ,concatNums)
            display = concatNums.includes('+')?addition(concatNums):concatNums.includes('/')?division(concatNums):concatNums.includes('x')?multiplication(concatNums):concatNums.includes('−')?subtraction(concatNums):display
            concatNums = ''
            displayCurrent.innerText = display
            console.log('equals')
        }
    }
    console.log(`Button clicked:${value}, Display${display}, PrevNum: ${concatNums}, Operator:${operation}`)
}

//select all li (calc buttons) and add event listener to each with loop
// let buttons = document.querySelectorAll('li')
// for(li of buttons){
//     li.addEventListener('click', clicky)
// }

//using event bubbling select parent element of all buttons(does trigger on empty space...)
document.querySelector('.button-container').addEventListener('click', clicky)