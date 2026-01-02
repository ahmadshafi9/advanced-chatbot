'use client';

import "./styles.css";
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { useState } from 'react';

export default function Page() {
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
  });
  const [input, setInput] = useState('');

  switch (status) {
    case 'submitted':
      return <div className="thinking">
        thinking...
      </div>
    default:

  


  return (

    <div className='parent-container'>
      <div className="history">
        <p>last thing u searched</p>
        <p>2nd last thing u searched</p>
        <p>2nd last thing u searched</p>
        <p>3rd last thing u searched</p>
        <p>4th last thing u searched</p>
        <p>5th last thing u searched</p>
        <p>6th last thing u searched</p>
        <p>7th last thing u searched</p>
        <p>8th last thing u searched</p>
        <p>9th last thing u searched</p>
        <p>10th last thing u searched</p>
        <p>11th last thing u searched</p>
        <p>12th last thing u searched</p>
        <p>13th last thing u searched</p>
        <p>14th last thing u searched</p>
        <p>14th last thing u searched</p>
        <p>14th last thing u searched</p>
        <p>14th last thing u searched</p>
        <p>14th last thing u searched</p>
        <p>14th last thing u searched</p>
        <p>14th last thing u searched</p>
        <p>14th last thing u searched</p>
        <p>14th last thing u searched</p>
        <p>14th last thing u searched</p>
        <p>14th last thing u searched</p>
        <p>14th last thing u searched</p>
        <p>14th last thing u searched</p>
        <p>14th last thing u searched</p>
      </div>
      <div className="rest">
        <div className="chat">

          {messages.map(message => (

            <div className={message.role == "user" ? "chatUser" : "chatAI"}
              key={message.id}>
              {message.role === 'user' ? <>User:{"  "}</> : <>AI:{"   "}</>}

              {message.parts.map((part, index) =>
                part.type === 'text' ? <span key={index}>{part.text}</span> : null,
              )}
            </div>
          ))}
        </div>
        <form

          onSubmit={e => {
            e.preventDefault();
            if (input.trim()) {
              sendMessage({ text: ' ' + input });
              setInput('');
            }
          }}
        >

          <input
            className="input"
            value={input}
            onChange={e => setInput(e.target.value)}
            disabled={status !== 'ready'}
            //div classname input
            placeholder="Say something..."
          //div
          />


          <div className="submit">
            <button type="submit" disabled={status !== 'ready'}>

            </button>

          </div>

        </form>
      </div>
    </div>

  );
}
}
