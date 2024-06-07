
import { useState } from 'react'
import './App.css'
import Signup from './Components/Signup'
import BussinesInfo from './Components/BusinessInformation'


function App() {
    
  const[step, SetStep] = useState(0);

  const handleNext  = () =>{
    SetStep((prevStep) => prevStep+1);
  }

  const handleBack  = () =>{
    SetStep((prevStep) => prevStep-1);
  }

  return (
    <>
     {step === 0 &&<Signup handleNext={handleNext}/>}
     {step === 1 && <BussinesInfo handleBack={handleBack} />}
    </>
  )
}

export default App
