const { reverse } = require("dns");
const { string } = require("yargs");

const stringLength = string =>  {
    
    const stringCount = string.length;
    if(stringCount > 0 && stringCount <= 10) {
    return stringCount;
    } else {
        if(stringCount < 0){
        throw new Error('Empty String');
            if(stringCount > 10){
            throw new Error('String is above 10 characters');
        }
    }
    }
}

const reverseString = string => {
    const reversed = [];
    const splitString = string.split('');
    for(let i = 0; i < string.length; i+=1){
        reversed.push(splitString.pop());
    }
    return reversed.join('');
}

class Calculator {

    add(num1, num2) {
        return num1 + num2;
    }
    subtract(num1, num2) {
        return num1 - num2;
    }
    divide(num1, num2) {
        return num1 / num2;
    }
    multiply(num1, num2){
        return num1 * num2;
    }
}

const capitalize = str => {
    strSplit = str.split('');
    removeFirst = strSplit.splice(0,1);
    extractRem = strSplit.slice(0,strSplit.length);
    return removeFirst[0].toUpperCase() + extractRem.join('');
}
console.log(capitalize('neto'));
 module.exports = {stringLength, reverseString, Calculator, capitalize};
