import React, { useState, useEffect } from 'react';
import { Chatwindow } from './Chatwindow/Chatwindow';
import { Header } from './Header/Header';
import { Messagewindow } from './Messagewindow/Messagewindow';
import './Container.css';
import { DUMMY_DATA } from '../../shared/Mock_Messages';


const Container = () => {
    const [messages, setMessages] = useState(DUMMY_DATA);

    return (
        <div className="container">
            <Header />
            <Chatwindow messages={messages}/>
            <Messagewindow />
        </div>
    )
}

export default Container;
