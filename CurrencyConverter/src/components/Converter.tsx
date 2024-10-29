import { useState } from 'react';
import Input from './Input';
import Output from './Output';
import { fetchData, convertCurrency } from '../utils';

function Converter() {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [output, setOutput] = useState('');
  const [currency, setCurrency] = useState({
    one: '',
    two: '',
  });
  const [isLoading, setIsLoading] = useState(false); // To show loading state

  const handleConvert = async () => {
    // Validate inputs
    if (!amount || !currency.one || !currency.two) {
      setError('Please enter a valid amount and select currencies');
      return;
    }

    try {
      setIsLoading(true); // Set loading state to true
      const data = await fetchData({ amount, currency }); // Make the API call manually
      if (data && data.new_amount) {
        convertCurrency(currency, data.new_amount, setOutput); // Set the converted output
      } else {
        setError('Conversion failed');
      }
    } catch (error) {
      setError('Error fetching data');
      console.error(error);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <section className="max-w-3xl mx-auto w-full bg-white bg-opacity-40 p-6 rounded-xl flex flex-col gap-10">
      <Input setAmount={setAmount} setCurrency={setCurrency} setError={setError} error={error} />
      <Output output={output} />
      <button
        onClick={handleConvert}
        className="bg-slate-800 text-slate-100 font-semibold uppercase text-base py-3 px-10 rounded-full self-center"
        disabled={isLoading} // Disable button while loading
      >
        {isLoading ? 'Converting...' : 'Convert'}
      </button>
      {error && <p className="text-red-500">Error: {error}</p>}
    </section>
  );
}

export default Converter;
