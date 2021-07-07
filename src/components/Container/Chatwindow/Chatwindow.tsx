import React, { useEffect, useState } from 'react';
// import { Receiverchat } from './Receiverchat/Receiverchat';
import { Chatmessagelist } from './Chatmessagelist/Chatmessagelist';
import { Chatnamelist } from './Chatnamelist/Chatnamelist';
import './Chatwindow.css';

export const Chatwindow = (props: any) => {

    return (
        <div className="chatWindowContainer">
            <div className="nameList">
                {props.messages.map((item: any, index: number) => (
                    <Chatnamelist
                        key={index}
                        user={item.senderId}
                        messageText={item.text}
                        avatar={item.avatar}
                    />))}
            </div>
            <div className="messageList">
                {props.messages.map((item: any, index: number) => (
                    <Chatmessagelist
                        id={index}
                        key={index}
                        user={item.senderId}
                        message={item.text}
                    />
                ))}
            </div>
        </div>
    )
}
