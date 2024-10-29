function handleRomanChange(
    setRoman: React.Dispatch<React.SetStateAction<string>>,
    setError: React.Dispatch<React.SetStateAction<string>>,
    value: string
  ) {
    // Allowed Roman numeral symbols
    const validSymbols = ['I', 'V', 'X', 'L', 'C', 'D', 'M', '_I', '_V', '_X', '_L', '_C', '_D', '_M'];
  
    // Roman numeral values
    const romanValues = {
      'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000,
      '_I': 1000, '_V': 5000, '_X': 10000, '_L': 50000, '_C': 100000, '_D': 500000, '_M': 1000000
    };
  
    // Extract valid symbols from the input
    const symbols = value.match(/_?[IVXLCDM]/g);
 
  
    if (!symbols) {
      setError('Enter a valid Roman numeral');
      return; // Exit if no valid symbols were found
    }
  
    // Validate that all symbols are allowed
    for (let symbol of symbols) {
      if (!validSymbols.includes(symbol)) {
        setError('Enter a valid Roman numeral');
        return; // Exit on invalid symbol
      }
    }
  
    // Validate the Roman numeral sequence (no smaller value before a larger value)
    for (let i = 0; i < symbols.length - 1; i++) {
      if (romanValues[symbols[i]] < romanValues[symbols[i + 1]]) {
        setError('Invalid sequence: smaller value cannot precede a larger one');
        return; // Exit on invalid sequence
      }
    }
  
    // If all checks pass, update the value and clear the error
    setRoman(value);
    setError('');
  }
  
function getDecimal(setOutput:React.Dispatch<React.SetStateAction<string>>, roman:string){
    const symbols = roman.match(/_?[IVXLCDM]/g);
    let result = 0
    const romanValues = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000,
        '_I': 1000, '_V': 5000, '_X': 10000, '_L': 50000, '_C': 100000, '_D': 500000, '_M': 1000000
      };

    for(let roman of symbols){
        result += romanValues[roman]
    }

    setOutput(result.toString())

}


export {handleRomanChange, getDecimal}