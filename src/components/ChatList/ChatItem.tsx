import React from 'react';
import {Card} from 'react-bootstrap';

interface Props{
 message:string;
 author:string;
 date:string
}
const ChatItem:React.FC<Props> = ({author,message,date}) => {
  const dateFormat = (date: string): string => {
    const d: Date = new Date(date);
    return [
      d.getDate(),
      d.getMonth() + 1,
      d.getFullYear()].join('/') + ' ' + [
      d.getHours(),
      d.getMinutes(),
      d.getSeconds()].join(':');
  };
  return (
    <Card>
      <Card.Header className="d-flex justify-content-between" >
        <strong className="text-uppercase text-black-50">{author}</strong>
        <span>{dateFormat(date)}</span>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {message}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ChatItem;