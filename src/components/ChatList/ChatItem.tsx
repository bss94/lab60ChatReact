import React from 'react';
import {Card} from 'react-bootstrap';

interface Props{
 message:string;
 author:string;
 date:string
}
const ChatItem:React.FC<Props> = ({author,message,date}) => {
  return (
    <Card>
      <Card.Header as="h6">{author},  <span>{date}</span> </Card.Header>
      <Card.Body>
        <Card.Text>
          {message}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ChatItem;