import React, { useState } from 'react';
import './Messagewindow.css';

export const Messagewindow = () => {
    const [message, setMessage] = useState([]);

    const handleChange = (e : any) => {
        setMessage(e.target.value);
    };

    return (
        <div className="messageWindow">
           <input type="text" className="messageText" placeholder="Type your message here"
           value={message}
           onChange={handleChange} />
        </div>
    )
}
