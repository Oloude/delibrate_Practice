import axios from "axios"

function getCategory(){
    const data = [
        {'title' : 'General Knowledge', value: '9'},
        {'title' : 'Books' , value: '10'},
        {'title' : 'Film' , value: '11'},
        {'title' : 'Music' , value: '12'},
        {'title' : 'television', value: '14'},
        {'title' : 'Nature', value: '17'},
        {'title' : 'Computer', value: '18'},
        {'title' : 'Mathematics', value: '19'},
        {'title' : 'Sports', value: '21'},
        {'title' : 'Geography', value: '22'},
        {'title' : 'History', value: '23'},
        {'title' : 'Politics', value: '24'},
        {'title' : 'Art', value: '25'},
        {'title' : 'Celebrities', value: '26'},
        {'title' : 'Animal', value: '27'},
        {'title' : 'Vehicles', value: '28'}
    ]

    return data
}

function getLevel(){
    const data = [
       'easy',
        'medium',
        'hard'
    ]

    return data
}

function handleCategory(setCategory:React.Dispatch<React.SetStateAction<string>>, value:string){
setCategory(value)
}

function handleLevel(setLevel:React.Dispatch<React.SetStateAction<string>>, value:string){
setLevel(value)
}

const fetchData = async (category:string, level:string)=>{
  let response= await axios.get(`https://opentdb.com/api.php?amount=20&category=${parseInt(category)}&difficulty=${level}&type=multiple`)
  return response.data
}

function handlePrev(setCurrentNumber:React.Dispatch<React.SetStateAction<number>>){
setCurrentNumber(prev => prev <= 1 ? 1 : prev - 1)
}

function handleNext(setCurrentNumber:React.Dispatch<React.SetStateAction<number>>){
    setCurrentNumber(prev => prev >= 20 ? 1 : prev + 1)
 }

 const decodeHtmlEntities = (text: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    return doc.body.textContent || '';
  };
  

export {getCategory, getLevel, handleCategory, handleLevel, fetchData, handleNext, handlePrev, decodeHtmlEntities}