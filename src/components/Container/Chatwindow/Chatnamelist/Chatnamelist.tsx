import React from 'react';
import { Avatar } from '@material-ui/core';
import './Chatnamelist.css';

export const Chatnamelist = (props: any) => {
    return (
        <div className="chatNameList">
            <span className="chatNameList__avatar">
                <Avatar> {props.avatar} </Avatar>
            </span>
            <span>
                <div className="chatNameList__username">{props.user}</div>
                <div className="chatNameList__lastmessage">{props.messageText}</div>
            </span>
        </div>
    )
}
