import { SetStateAction, Dispatch } from "react";



const getInputClasses = (position:string)=> {
    switch (position) {
        case 'top-left':
            return 'top-0 left-0'
            break;
        case 'top-right':
            return 'top-0 right-0'
            break;
        case 'bottom-left':
            return 'bottom-0 left-0'
            break;
        case '':
            break;
        default:
            return 'bottom-0 right-0'
            break;
    }
}


const handleInputChange = (setBorderRadius:  Dispatch<SetStateAction<{
    'top-left': number;
    'top-right': number;
    'bottom-left': number;
    'bottom-right': number;
}>>, 
position:string, 
value:string)=> {

    setBorderRadius(prevBoarder => {
        return {
            ...prevBoarder,
            [position] : parseInt(value)
        }
    })
}

export {getInputClasses, handleInputChange}