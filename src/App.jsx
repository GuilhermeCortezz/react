import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [calculo, setCalculo] = useState(0)

  useEffect(()=>{
    setCalculo(()=> count * 2 )
  }, [count]);

  return (
    <>
      <div>
       <p>Voce clicou {count} vezes</p>
       <button onClick={() => setCount(count + 1)}>Clicar</button>
       <p>Calculo: {calculo} </p>
    </div>
    </>
  )
}

export default App
