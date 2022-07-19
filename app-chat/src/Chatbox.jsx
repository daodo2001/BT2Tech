
import './App.scss';
import React from 'react';
import { useState, useEffect, useRef } from "react";
import { database, ref, push, onValue } from "./firebase";

function Chatbox({ name }) {
    const [inpMessage, setIptMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const input = useRef();
    useEffect(() => {
        onValue(ref(database, "message"), (data) => {
          let getMsg = [];
          data.forEach((d) => {
            getMsg.push(d.val());
          });
          setMessages(getMsg);
        });
      }, []);
      const handleSendMessage = () => {
        push(ref(database, "message"), {
          name: name,
          message: inpMessage,
        });
        setIptMessage("");
       
      };

  return (
    <main className="page__main">
    <div className="block--background">
      <div className="chatbot__overview">
      
        <ul className="chatlist">
        <li className="bot__output bot__output--standard">Hey, I'm {name}!</li>
        {messages.map((msg, index) => {
           
          return (
            <li className="bot__output bot__output--standard" key={index}>
              <span>{msg.name}: </span>
              <span>{msg.message}</span>
            </li>
          );
        })}
          
        </ul>
      </div>
      <div style={{width:550,  }} className="chatbox-area">
     
          <textarea  value={inpMessage}
        onChange={(e) => {
          setIptMessage(e.target.value);
        }}
        ref={input} type="text" placeholder="Talk to me!" className="chatbox" name="chatbox"  minLength={2} defaultValue={""} />
          <button style={{marginBottom: 40,marginRight: 20,height: 48,width: 60, backgroundColor: "#27ae60", color: "white" }} onClick={handleSendMessage} className="btn btn-outline-secondary" type="button" id="button-addon2">Gửi</button>
      </div>
      <div className="block--background" />
    </div>
    </main>
  );
}

export default Chatbox;
