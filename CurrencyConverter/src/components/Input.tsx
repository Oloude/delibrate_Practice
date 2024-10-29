import Currency from "./Currency";
import { getCurrency, getAmount } from "../utils";

type InputProps = {
  setCurrency: React.Dispatch<React.SetStateAction<{
    one: string;
    two: string;
  }>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
  error: string;
};

function Input({ setCurrency, setError, setAmount, error }: InputProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-2">
        <label htmlFor="" className="text-slate-900 font-medium text-base">
          Convert From
        </label>
        <Currency
          handleChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            getCurrency(setCurrency, "one", e.target.value)
          }
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="">Amount</label>
        <input
          type="number"
          onChange={(e) => getAmount(setError, setAmount, e.target.value)}
          className="bg-inherit border border-slate-950 text-base text-slate-800 px-3 py-2 rounded-lg outline-none"
        />
        <span className="text-red-500 text-sm font-medium">{error}</span>
      </div>
      <div className="flex gap-2">
        <label htmlFor="" className="text-slate-900 font-medium text-base">
          Convert To
        </label>
        <Currency
          handleChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            getCurrency(setCurrency, "two", e.target.value)
          }
        />
      </div>
    </div>
  );
}

export default Input;
