import { decodeHtmlEntities } from "../utils"

type CardProps = {
    question : string,
    correct_answer : string,
    incorrect_answer : string[]
}

function Card({question, correct_answer, incorrect_answer}: CardProps) {
    console.log(incorrect_answer)
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  return (
    <div className="card sm:w-full max-w-xl mx-auto">
        <div className="card-inner">
            <div className="card-front bg-slate-950 text-slate-100 flex justify-center items-center flex-col p-6 gap-4">
                <h2 className="text-2xl text-center">{ decodeHtmlEntities(question) }</h2>
                <div className="flex gap-2 flex-wrap">
                    {[...incorrect_answer, correct_answer].sort((a,b)=> a.localeCompare(b)).map((item, idx) => <p key={item} className="w-[45%]">{alphabet[idx]}. {decodeHtmlEntities(item)}</p>)}
                </div> 
            </div>
            <div className="card-back bg-slate-900 text-slate-100 flex flex-col gap-3 justify-center items-center -6">
                <h2 className="text-3xl font-medium text-center">The correct answer is:</h2>
                <p className="text-xl text-center">{decodeHtmlEntities(correct_answer)}</p>
            </div>
        </div>
    </div>
  )
}

export default Card