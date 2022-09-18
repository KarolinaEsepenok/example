import React, {useState} from 'react';

import './App.css';
import Button from "./components/Button";
import Input from "./components/Input";
import UseMemoFactorial from "./exz/useMemoFactorial";
import {v1} from "uuid";

function App() {
    let [message, setMessage] = useState([
            {id:v1(), message: 'message1'},
            {id:v1(),message: 'message1'},
            {id:v1(),message: 'message1'}
        ]
    )
    let [title, setTitle] = useState('')
    let [error,setError]=useState<string|null>(null)
    const addMessage = (title:string) => {
        const newMessage= {id:v1(),message:title}

        setMessage([newMessage,...message])
    }
    const callback=()=>{
        if(title.trim() !== ''){
        addMessage(title)
        setTitle('')
    }else {
        setError('Message is requared')}

}
  return (
    <div className="App">
      <Input setTitle={setTitle} title={title}/>
      < Button callback={callback} nameB={'memory'}/>
        <ul> {message.map(m=><li>{m.message}</li>)}</ul>
        <UseMemoFactorial/>

    </div>
  );
}

export default App;
