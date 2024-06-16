import React from 'react';
import ChatItem from './ChatItem';
import {Message} from '../../types';

interface Props{
messages:Message[]
}
const ChatList:React.FC<Props> = ({messages}) => {
  return (
    <>
      {messages.map((messItem)=>{
        return <ChatItem message={messItem.message} author={messItem.author} date={messItem.datetime} key={messItem._id}/>
      })}


    </>

  );
};

export default ChatList;