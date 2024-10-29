type CurrencyProps = {
  handleChange:(e: React.ChangeEvent<HTMLSelectElement>)=>void
}

function Currency({handleChange} : CurrencyProps) {
  return (
    <div className="w-2/3">
    <select name="currency" onChange={handleChange} className="w-full outline-none text-slate-600 bg-slate-50">
    <option value="">Choose currency</option>
    <option value="CNY">Chinese Yuan</option>
  <option value="GBP">British Pound</option>
  <option value="CHF">Swiss Franc</option>
  <option value="NZD">New Zealand Dollar</option>
  <option value="AUD">Australian Dollar</option>
  <option value="KRW">South Korean Won</option>
  <option value="PLN">Polish Zloty</option>
  <option value="DKK">Danish Krone</option>
  <option value="TRY">Turkish New Lira</option>
  <option value="HKD">Hong Kong Dollar</option>
</select>

    </div>
  )
}

export default Currency