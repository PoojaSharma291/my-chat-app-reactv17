import React, { useEffect, useState } from 'react';
import './Chatmessagelist.css';

export const Chatmessagelist = (props: any) => {
    useEffect(() => {
        console.log(props);
        debugger;
    }, [],
    );
    return (
        <div className="chatMessageList">
            <span className="userName">{props.user}</span><span className="messageText"> {props.message}</span>
        </div>
    )
}
