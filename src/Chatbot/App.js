import React, { useState } from 'react'
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';

import './Chat.css';



import MessageParser from "./messageParser";
import ActionProvider from "./actionProvider";
import config from './config.js'

function App() {
  const [chat, setChat] = useState(true);
  return (
    <div className='container_chat' style={{width: '100%',  display: 'flex', justifyContent:'center', alignItems: 'center',padding:'0px', margin:'0px'}}>
       {chat?  (<Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        headerText='Chatbot'
        placeholderText='enter your text'
        disableScrollToBottom
        style={{width:'px', backgroundColor: 'yellowgreen',margin:'auto'}}
      />) : null }
      <br/>
      <div>
      <button className='btn  ' onClick={()=> setChat(!chat)}>{chat?'Close Chat':'chat'}</button>
        
      </div>
      
    </div>
  )
}

export default App