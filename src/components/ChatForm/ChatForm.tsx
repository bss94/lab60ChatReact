import React, {useState} from 'react';
import {Button, Form } from 'react-bootstrap';

const ChatForm:React.FC = () => {
const [username,setUsername]=useState<string>('');
  const [message,setMessage]=useState<string>('');
  const [remember,setRemember]=useState<boolean>(false);

  const onNameChange=()=>{

  }
  const onMessageChange=()=>{

  }
  const onFormSubmit=()=>{

  }

  return (
    <Form >
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" readOnly={remember}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control type="text" placeholder="Message" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Check">
        <Form.Check type="checkbox" label="Remember Name" checked={remember} onChange={()=>setRemember(!remember)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ChatForm;