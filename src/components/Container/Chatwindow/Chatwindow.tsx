import React, { useEffect, useState } from 'react';
// import { Receiverchat } from './Receiverchat/Receiverchat';
import { Chatmessagelist } from './Chatmessagelist/Chatmessagelist';
import './Chatwindow.css';

export const Chatwindow = (props: any) => {

    return (
        <div className="chatWindowContainer">
            {props.messages.map(( item:any, index:number ) => (
                <Chatmessagelist
                    id={index}
                    key={index}
                    user={item.senderId}
                    message={item.text}
                />
            ))}
        </div>
    )
}
