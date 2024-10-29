import { Dispatch, SetStateAction } from 'react';



function handleBinary(setBinary: Dispatch<SetStateAction<string>>, value:string) {
setBinary(value)
}
  
function covertBinary(binary:string, setError: Dispatch<SetStateAction<string>>, setDecimal:Dispatch<SetStateAction<string>>){
    if (/^[01]+$/.test(binary) && binary.trim()) {
        setError('');
        setDecimal(converter(binary));  // Assuming converter is a function that converts binary to decimal
      } else {
        setError('Please enter a valid binary number (0 or 1).');
        setDecimal('0');  // Optionally reset the decimal value to 0 if the input is invalid
      }
}

function converter(binary: string): string {
    let decimal = 0;
    let exponent = binary.length - 1;
  
    for (let i = 0; i < binary.length; i++) {
      let bit = parseInt(binary[i]); 
      decimal += bit * Math.pow(2, exponent);
      exponent--;
    }
  
    return decimal.toString(); 
  }


export {handleBinary, covertBinary}