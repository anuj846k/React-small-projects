import { useState } from "react"
import ProgressBar from "./components/Progress"
const App = () => {
  const [progress,setProgress]=useState(0)

  function updateProgress(){

    if (progress < 100) {
      setProgress(progress+10)
    }
  }
  function decreaseProgress(){
    if (progress >= 10) {
      setProgress(progress-10)
    }
  }

  function reset(){
    setProgress(0)
  }
  return (
    <div>
      <ProgressBar progress={progress} />
      <button className="btn" onClick={updateProgress}>Increase Progress</button>

      <button className="btn" onClick={decreaseProgress}>Decrease Progress</button>

      <button className="btn2" onClick={reset}>Reset</button>
      
      
    </div>
  )
}

export default App
