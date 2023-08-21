function factoryFunction (operation, number1, ...number2)
{
    switch(operation){
        case 'add' : return addition(number1, ...number2)
        case 'substract' : return substraction(number1, ...number2)
        case 'multiply' : return multiplication(number1, ...number2) 
        case 'divide' : return division(number1, ...number2)
    }
function addition (number1, ...number2)
{
    let sum = 0
    for(var currentNumber = 0, size = number2.length; currentNumber < size ; currentNumber++){
        var item = list[currentNumber];
        sum = number1 + currentNumber
};
    console.log("Addition: ",sum);   
}
function substraction (number1, ...number2)
{
    let sub = 0
    for(var currentNumber = 0, size = number2.length; currentNumber < size ; currentNumber++){
        var item = list[currentNumber];
        sum = number1 - currentNumber
};
    console.log("Addition: ",sub);   
}

}
