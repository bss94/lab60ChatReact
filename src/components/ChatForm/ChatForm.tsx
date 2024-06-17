import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';

const ChatForm: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [remember, setRemember] = useState<boolean>(false);

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const onMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };
  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (username !== '' && message !== '') {
      const body = new URLSearchParams();
      body.append('author', username);
      body.append('message', message);
      if (!remember) {
        setUsername('');
      }
      setMessage('');
      try {
        await fetch('http://146.185.154.90:8000/messages', {method: 'POST', body});
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <Form onSubmit={onFormSubmit} className="border-top border-dark p-2">
      <Form.Group className="mt-5 mb-3" controlId="name">
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={username}
          readOnly={remember}
          onChange={onNameChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="message">
        <Form.Control
          type="text"
          placeholder="Message"
          value={message}
          onChange={onMessageChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Check">
        <Form.Check
          type="checkbox"
          label="Remember Name"
          checked={remember}
          onChange={() => setRemember(!remember)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Send
      </Button>
    </Form>
  );
};

export default ChatForm;