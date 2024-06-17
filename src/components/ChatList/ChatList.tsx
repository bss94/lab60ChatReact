import React from 'react';
import ChatItem from './ChatItem';
import {Message} from '../../types';

interface Props {
  messages: Message[];
}

const ChatList: React.FC<Props> = ({messages}) => {
  const copyMessages = [...messages];

  return (
    <>
      <div className="overflow-y-scroll" style={{height: "500px"}}>
        {copyMessages.map((messItem) => {
          return <ChatItem message={messItem.message} author={messItem.author} date={messItem.datetime}
                           key={messItem._id}/>;
        })}


      </div>
    </>


  );
};

export default ChatList;