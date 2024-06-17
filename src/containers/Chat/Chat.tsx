import {useEffect, useState} from 'react';
import ChatList from '../../components/ChatList/ChatList';
import {Col, Container, Row} from 'react-bootstrap';
import {Message} from '../../types';
import {getRequest} from '../../request';

const Chat = () => {

  const [messages, setMessages] = useState<Message[]>([]);





  useEffect(() => {
    const initialState = async () => {
      const arr = await getRequest('http://146.185.154.90:8000/messages', 'GET');
      setMessages([...arr]);
    };
    void initialState();

  }, []);

  useEffect(() => {
    const interval= setInterval(async () => {
      const copyMessages = [...messages];
      const lastItem = copyMessages.pop();
      if(lastItem!==undefined){
        const lastMessageTime: string = lastItem.datetime;
        const newMessages = await getRequest(`http://146.185.154.90:8000/messages?datetime=`+lastMessageTime, 'GET');
        if (newMessages.length > 0) {
          console.log('find');
          setMessages(prevState => {
            return [...prevState, ...newMessages];
          });
          clearInterval(interval);
        }
      }
    }, 5000);
  }, [messages]);




  return (
    <Container>
      <Row>
        <Col xs={3}/>
        <Col xs={6}><ChatList messages={messages}/></Col>
        <Col xs={3}></Col>
      </Row>
    </Container>


  );
};

export default Chat;