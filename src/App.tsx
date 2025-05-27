import { useState } from 'react';
import './App.css'
import { Parent } from './components/Parent'


const NUM_INPUTS = 20;

const generateInitialValues = (num: number) =>
  Array.from({ length: num }).reduce((acc: any, _, i) => {
    acc[`input${i + 1}`] = "";
    return acc;
  }, {});


function App() {

  const [values, setValues] = useState(generateInitialValues(NUM_INPUTS));

  function handleClick() {
    console.log("values", values)
  }


  return (
    <>
      <Parent values={values} setValues={setValues}></Parent>
      <button onClick={handleClick}>Print All</button>
    </>
  )
}

export default App
