import { useState, useEffect } from "react"
import { useQuery } from "react-query"
import { fetchData, handleNext, handlePrev } from "../utils"
import Card from "./Card"
import Header from "./Header"


function Flashcard() {

    const [category, setCategory] = useState('9')
    const [level, setLevel] = useState('easy')
    const [dataArr, setDataArr] = useState([])
    const [currentNumber, setCurrentNumber] = useState(1)

    const {data, isLoading, error} = useQuery(['flashdata', category, level], ()=>fetchData(category,level))

    useEffect(() => {
        if (data && data.results) {
          setDataArr(data.results); // Update the state with fetched data
        }
      }, [data, level, category]);

    
    

  return (
    <section className="w-full">
        <h1 className="text-slate-950 font-bold text-4xl text-center mb-12">Flash Card</h1>
        <Header setCategory={setCategory} setLevel={setLevel}/>
        { dataArr.length > 0 ? <div className="flex flex-col gap-4 max-w-xl mx-auto">
            <Card question={dataArr[currentNumber-1]["question"]}
            correct_answer={dataArr[currentNumber-1]["correct_answer"]}
            incorrect_answer={dataArr[currentNumber-1]["incorrect_answers"]}
        />
            <div className=" flex justify-between items-center w-full">
                    <button onClick={()=>handlePrev(setCurrentNumber)} className="hover:bg-slate-300 p-4 hover:text-slate-800">Prev</button>
                    <button onClick={()=>handleNext(setCurrentNumber)} className="hover:bg-slate-300 p-4 hover:text-slate-800">Next</button>
                </div>
            </div> : <p className="text-center font-semibold text-lg text-slate-800">loading...</p>}
    </section>
    
  )
}

export default Flashcard