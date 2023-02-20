import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {

  const [text, setText] = useState("")
  const [wordCount,setWordCount] = useState(0)
    
  function handleChange(e) {
    const {value} = e.target
    setText(value)
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ")
    setWordCount(wordsArr.filter(word => word !== "").length)
  }

  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <textarea
        onChange={handleChange}
        value={text}
      />
      <h4>Time reminaing: ???</h4>
      <button onClick={() => calculateWordCount(text)}>Start</button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
