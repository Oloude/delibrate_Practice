function handleDollar(
    setDollar:React.Dispatch<React.SetStateAction<string>>,
    setError : React.Dispatch<React.SetStateAction<string>>,
    value:string){
        if(value && parseFloat(value) > 0){
            setDollar(value)
            setError('')
        }else{
            setError('Enter a valid number > than 0')
        }

}
function convertDollar(dollar: string, setOutput: React.Dispatch<React.SetStateAction<[] | number[]>>) {
    const quater = 0.25;
    const dime = 0.10;
    const nickel = 0.05;
    const penny = 0.01;
  
    let remaining: number = parseFloat(dollar);
  
    
    let quaterValue = Math.floor(remaining / quater);
    remaining = parseFloat((remaining - quaterValue * quater).toFixed(2)); 
  
    let dimeValue = Math.floor(remaining / dime);
    remaining = parseFloat((remaining - dimeValue * dime).toFixed(2)); 
  
    let nickelValue = Math.floor(remaining / nickel);
    remaining = parseFloat((remaining - nickelValue * nickel).toFixed(2)); 
  
    let pennyValue = Math.round(remaining / penny); 
  
    setOutput([quaterValue, dimeValue, nickelValue, pennyValue]);
  }
  
  

export {handleDollar, convertDollar}