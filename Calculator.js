function calculatorFunction (operation, number1, ...number2)
{
    switch(operation){
        case 'add' : return addition(number1, ...number2)
        case 'substract' : return substraction(number1, ...number2)
        case 'multiply' : return multiplication(number1, ...number2) 
        case 'divide' : return division(number1, ...number2)
    }
}

function factoryFunction (operation)
{
    switch(operation){
        case 'add' : return addition()
        case 'substract' : return substraction()
        case 'multiply' : return multiplication() 
        case 'divide' : return division()
    }
}
function addition (number1, ...number2)
{
    let sum = number1
    for (let i = 0; i < arguments.length; ++i){
        sum += arguments[i]; 
};
    console.log("Addition: ",sum);   
    console.log('ceil : ',Math.ceil(sum));
    console.log('floor : ',Math.ceil(sum)); 
}

function substraction (number1, ...number2)
{
    let sub = number1
    for (let i = 0; i < arguments.length; ++i){
        sub -= arguments[i]; 
};
    console.log("subtraction: ",sub);   
    console.log('ceil : ',Math.ceil(sub));
    console.log('floor : ',Math.ceil(sub)); 
}

function multiplication (number1, ...number2)
{
    let mul = number1
    for (let i = 0; i < arguments.length; ++i){
        mul *= arguments[i]; 
};
    console.log("Multiplication: ",mul);   
    console.log('ceil : ',Math.ceil(mul));
    console.log('floor : ',Math.ceil(mul));   
}

function division (number1, ...number2)
{
    let div = number1
    for (let i = 0; i < arguments.length; ++i){
        div /= arguments[i]; 
};
    console.log("division: ",div);   
    console.log('ceil : ',Math.ceil(div));
    console.log('floor : ',Math.ceil(div));   
}

calculatorFunction("add", 13, 45, 56, 76)
factoryFunction("add")


