
function handleNext(setPageNumber: React.Dispatch<React.SetStateAction<number>>){
    setPageNumber(prev => prev + 1)
}

function handleBack(setPageNumber: React.Dispatch<React.SetStateAction<number>>){
    setPageNumber(prev => prev - 1)
}

function handlePageNumber(setPageNumber: React.Dispatch<React.SetStateAction<number>>, number:number){
    setPageNumber(number)
}

function validateNameInput(setNameValidation :React.Dispatch<React.SetStateAction<{
    value: string;
    error: string;
}>>, valueInput :string){

    const namePattern = /^[a-zA-Z\s'-]+$/;

if(namePattern.test(valueInput)){
    setNameValidation({
        value : valueInput,
        error : ''
    })
}else{
    setNameValidation({
        value : '',
        error : 'Enter a valid name'
    })
}
}

function validateEmailInput(setEmailValidation: React.Dispatch<React.SetStateAction<{
    value: string;
    error: string;
}>>, valueInput:string){

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if( emailPattern.test(valueInput)){
    setEmailValidation({
         value : valueInput,
        error : ''
    })
  }else{
    setEmailValidation({
        value : '',
        error : 'Enter a valid email'
    })
}
}

function validatePhoneInput(setPhoneValidation: React.Dispatch<React.SetStateAction<{
    value: string;
    error: string;
}>>, valueInput:string){

    const phonePattern = /^(\+?\d{1,2}\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/;
 
  if(phonePattern.test(valueInput)){
    setPhoneValidation({
         value : valueInput,
        error : ''
    })
  }else{
    setPhoneValidation({
        value : '',
        error : 'Enter a valid phone number'
    })
}
}

function handleDateChange(value: string, setDate: React.Dispatch<React.SetStateAction<string>>){
setDate(value)
}

function handlePlanChange(value:string, setPlan:React.Dispatch<React.SetStateAction<string>>){
    setPlan(value)
}

function handleAddOnsChange(key:string, value:boolean, setAddOns:  React.Dispatch<React.SetStateAction<{
    service: boolean;
    storage: boolean;
    profile: boolean;
}>>){

    setAddOns(prev => {
        return {
            ...prev,
            [key] : value
        }
    })
}

const subscriptionPlans = {
    arcade: {
      month: 9,
      year: 90,
    },
    advance: {
      month: 12,
      year: 120,
    },
    pro: {
      month: 15,
      year: 150,
    },
    service: {
      month: 1,
      year: 10,
    },
    storage: {
      month: 2,
      year: 20,
    },
    profile: {
      month: 2,
      year: 20,
    }
  };


  function handleSummary(
    addOns: {
      service: boolean;
      storage: boolean;
      profile: boolean;
    },
    date: 'month' | 'year'
  ) {
    let value = Object.keys(addOns)
    .filter((key) => addOns[key as keyof typeof addOns]) // Ensure TypeScript knows key is from addOns
    .map((key) => ({
      addon: key,
      value: subscriptionPlans[key as keyof typeof subscriptionPlans][date], // Type-safe access to subscriptionPlans
    }));

  return value;
  
    
  }

  function handleConfirm(name:string, email:string, phone:string, setIsConfirm:React.Dispatch<React.SetStateAction<boolean>>){
    const namePattern = /^[a-zA-Z\s'-]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^(\+?\d{1,2}\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/;

    if(namePattern.test(name) && emailPattern.test(email) && phonePattern.test(phone)){
      setIsConfirm(true)
    }
else{
  return
}
  }
  


export {handleBack, handleNext, handlePageNumber, validateEmailInput, 
    validatePhoneInput, validateNameInput, handleDateChange, handlePlanChange,
     handleAddOnsChange, subscriptionPlans, handleSummary, handleConfirm}