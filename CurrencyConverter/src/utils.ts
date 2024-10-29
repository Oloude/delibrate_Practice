import axios from 'axios'


function getAmount(setError:React.Dispatch<React.SetStateAction<string>>,
     setAmount:React.Dispatch<React.SetStateAction<string>>, value:string){

        if(parseFloat(value) > 0 && value){
            setAmount(value)
            setError('')
        }else{
            setError('Enter a valid value')
        }
}


function getCurrency(setCurrency: React.Dispatch<React.SetStateAction<{
    'one': string;
    'two': string;
}>>, 
key:string,
value:string, 
){

    setCurrency(prev => {
        return {
            ...prev,
            [key] : value
        }
    })
}

function convertCurrency(
    currency: { one: string; two: string },
    amount: string,
    setOutput: React.Dispatch<React.SetStateAction<string>>
  ) {
    if (currency.one && currency.two && amount && parseFloat(amount) > 0) {
      setOutput(amount); 
    }
  }
  


 


  const fetchData = async ({
    amount,
    currency: { one, two },
  }: {
    amount: string;
    currency: { one: string; two: string };
  }) => {
    // Set headers for the API request
    const headers = {
      'Content-Type': 'application/json',
      'X-Api-Key': 'yt9UItB4t7ZRXmc0XIOw0ubUq53VHIws9DKeypAK', // Replace with your actual API key
    };
  
    // Make the API request
    try {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/convertcurrency?have=${one}&want=${two}&amount=${parseFloat(amount)}`,
        { headers }
      );
  
      // Return the response data
      return response.data;
    } catch (error) {
      // Handle error responses
      if (axios.isAxiosError(error)) {
        console.error('API request error:', error.response?.data || error.message);
        throw new Error('Failed to fetch conversion data. Please try again.');
      } else {
        console.error('Unexpected error:', error);
        throw new Error('An unexpected error occurred.');
      }
    }
  };
  
  
  




export {getAmount, getCurrency, convertCurrency, fetchData}