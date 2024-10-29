
type PersonalProps = {
    pageNumber : number, 
    setPageNumber : React.Dispatch<React.SetStateAction<number>>,
    setNameValidation : React.Dispatch<React.SetStateAction<{
        value: string;
        error: string;
    }>>,
     nameValidation : {
        value: string;
        error: string;
    },
        setEmailValidation : React.Dispatch<React.SetStateAction<{
            value: string;
            error: string;
        }>>,
        emailValidation : {
            value: string;
            error: string;
        },
        setPhoneValidation : React.Dispatch<React.SetStateAction<{
            value: string;
            error: string;
        }>>,
         phoneValidation : {
            value: string;
            error: string;
        },
        setIsConfirm :React.Dispatch<React.SetStateAction<boolean>>
  }

  type NavigationProps = {
    pageNumber : number, 
    setPageNumber : React.Dispatch<React.SetStateAction<number>>,
    nameValidation : {
      value: string;
      error: string;
  },
      emailValidation : {
          value: string;
          error: string;
      },
      
       phoneValidation : {
          value: string;
          error: string;
      },
      setIsConfirm :React.Dispatch<React.SetStateAction<boolean>>
  }

  type SummaryProps = {
    pageNumber : number, 
    setPageNumber : React.Dispatch<React.SetStateAction<number>>,
    plan : string,
    date : string,
    addOns : {
      service: boolean;
      storage: boolean;
      profile: boolean;
  },
  nameValidation : {
    value: string;
    error: string;
},
    emailValidation : {
        value: string;
        error: string;
    },
    
     phoneValidation : {
        value: string;
        error: string;
    }
    setIsConfirm :React.Dispatch<React.SetStateAction<boolean>>
  }

  type AddOnProps = {
    pageNumber : number, 
    setPageNumber : React.Dispatch<React.SetStateAction<number>>,
    addOns : {
      service: boolean;
      storage: boolean;
      profile: boolean;
  },
    setAddOns  :  React.Dispatch<React.SetStateAction<{
      service: boolean;
      storage: boolean;
      profile: boolean;
  }>>, 
  date: string,
  nameValidation : {
    value: string;
    error: string;
},
    emailValidation : {
        value: string;
        error: string;
    },
    
     phoneValidation : {
        value: string;
        error: string;
    }
    setIsConfirm :React.Dispatch<React.SetStateAction<boolean>>
  }

  type PlanProps = {
    pageNumber : number, 
    setPageNumber : React.Dispatch<React.SetStateAction<number>>,
    setDate : React.Dispatch<React.SetStateAction<string>>,
    date : string,
    plan : string,
    setPlan : React.Dispatch<React.SetStateAction<string>>,
    
  nameValidation : {
    value: string;
    error: string;
},
    emailValidation : {
        value: string;
        error: string;
    },
    
     phoneValidation : {
        value: string;
        error: string;
    }
    setIsConfirm :React.Dispatch<React.SetStateAction<boolean>>
  }
  

  export type {PersonalProps, NavigationProps, SummaryProps, AddOnProps, PlanProps}