import { useState } from 'react';
import './App.css';
import FilmsList from './filmsList';

function App(props) {
let [list, setList] = useState(["ready", "set", "go"]);
let [text, setText] = useState("");

 function onSubmit(event) {
  event.preventDefualt();
    let newList = [list, text];
   setList(newList);
   setText("");
  }

  
    return(
      <div>
        <h1>Hello, World!</h1>
        <form onSubmit={onSubmit}>
          <input
          type="text"
          name="text"
          id="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          />
          <button type="submit">Add to list</button>
        </form>
        <ul>
          {list.map((item, idx) => {
            return <li key={item + idx}>{item}</li>
          })}
        </ul>
        <FilmsList />
      </div>
    );
  }

export default App;
