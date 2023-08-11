import axios from "axios";
import { useState } from "react";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [countedWords, setCountedWords] = useState({})

  const handleSubmit = e => {
    e.preventDefault()
    const str = inputText;
    axios.post("https://counting-words.vercel.app/count-words", { str })
      .then(data => {
        setCountedWords(data.data);
        setInputText("");
      })
      .catch(err => console.log(err.message))
  }

  return (
    <div className="my-10 mx-10">
      <form onSubmit={handleSubmit}>
        <textarea value={inputText} onChange={e => setInputText(e.target.value)} name="textarea" placeholder="Your String Here" className="textarea textarea-bordered textarea-lg w-full min-w-[90%]" ></textarea>
        <button className="btn-primary btn" type="submit">Get Counted Words</button>
      </form>
      <div>
      {countedWords && Object.keys(countedWords).map((word, index) => (
          <p key={index}>
            <span className="font-semibold text-lg">{word}</span> appears : <span className="font-semibold text-lg">{countedWords[word]}</span> times
          </p>
        ))}
      </div>

    </div>
  );
};

export default App;