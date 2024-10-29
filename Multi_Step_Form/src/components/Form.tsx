
import { useState } from "react"
import AddOn from "./AddOn"
import Header from "./Header"
import Personal from "./Personal"
import Plan from "./Plan"
import Summary from "./Summary"
import Thanks from "./Thanks"



function Form() {

 const [pageNumber, setPageNumber] = useState(1)
 const [nameValidation, setNameValidation] = useState({
  value : '',
  error : ''
 })
 const [emailValidation, setEmailValidation] = useState({
  value : '',
  error : ''
 })
 const [phoneValidation, setPhoneValidation] = useState({
  value : '',
  error : ''
 })
 const [date, setDate] = useState('month')
const [plan, setPlan] = useState('arcade')
const [addOns, setAddOns] = useState({
  service : false,
  storage : false,
  profile : false
})
const [isConfirm, setIsConfirm] = useState(false)
 
  return (
    <section className="max-w-4xl mx-auto flex flex-col gap-10 h-full w-full lg:min-h-[400px]  lg:flex-row lg:bg-white lg:rounded-xl lg:p-3">
        <Header setPageNumber={setPageNumber} pageNumber={pageNumber}/>
       { !isConfirm && <div>{pageNumber === 1 && (<Personal setPageNumber={setPageNumber} pageNumber={pageNumber}
        setNameValidation={setNameValidation} nameValidation={nameValidation}
        setEmailValidation={setEmailValidation} emailValidation={emailValidation}
        setPhoneValidation={setPhoneValidation} phoneValidation={phoneValidation} setIsConfirm={setIsConfirm}/>)}
        {pageNumber === 2 && (<Plan setPageNumber={setPageNumber} pageNumber={pageNumber}
         setDate={setDate} date={date} plan={plan} setPlan={setPlan} setIsConfirm={setIsConfirm}
         nameValidation={nameValidation} phoneValidation={phoneValidation} emailValidation={emailValidation}/>)}
        {pageNumber === 3 && (<AddOn setPageNumber={setPageNumber} pageNumber={pageNumber}
        setAddOns={setAddOns} addOns={addOns} date={date} setIsConfirm={setIsConfirm}
        nameValidation={nameValidation} phoneValidation={phoneValidation} emailValidation={emailValidation}/>)}
        {pageNumber === 4 && (<Summary setPageNumber={setPageNumber} pageNumber={pageNumber}
        addOns={addOns} date={date} plan={plan} setIsConfirm={setIsConfirm} nameValidation={nameValidation}
        phoneValidation={phoneValidation} emailValidation={emailValidation}/>)}
        </div>}
        {isConfirm &&<Thanks/>}
       
    </section>
  )
}

export default Form