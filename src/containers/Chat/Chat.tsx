import {useEffect, useState} from 'react';
import ChatList from '../../components/ChatList/ChatList';
import {Col, Container, Row} from 'react-bootstrap';
import {Message} from '../../types';
import {getRequest} from '../../request';

const Chat = () => {

  const [messages,setMessages]=useState<Message[]>([]);

  useEffect(()=>{
    const initialState = async ()=>{
      const arr= await getRequest('http://146.185.154.90:8000/messages', 'GET');
      setMessages([...arr])
    }
   void initialState();

  },[])

    return (
    <Container>
      <Row>
        <Col xs={3} className="bg-dark"/>
        <Col xs={6} className="overflow-scroll h-auto"><ChatList messages={messages}/></Col>
        <Col xs={3} className="bg-dark"/>
      </Row>
    </Container>


  );
};

export default Chat;