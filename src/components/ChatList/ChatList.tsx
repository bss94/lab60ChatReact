import React, {useState} from 'react';
import ChatItem from './ChatItem';
import {Message} from '../../types';
import {Form, Spinner} from 'react-bootstrap';

interface Props {
  messages: Message[];
}

const ChatList: React.FC<Props> = ({messages}) => {
  const [sort, setSort] = useState<string>('');
  const copyMessages = [...messages];
  if (sort === "Newest") {
    copyMessages.reverse();
  }
  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value);
  };
  return (
    <>
      <Form.Select value={sort} onChange={onSelectChange}>
        <option>Sort by</option>
        <option value="Newest">Newest first</option>
        <option value="Oldest">Oldest first</option>
      </Form.Select>
      <div className="overflow-y-scroll mt-3 mb-3 " style={{height: "500px"}}>
        {copyMessages.length === 0
          ?
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          :
          copyMessages.map((messItem) => {
            return <ChatItem message={messItem.message} author={messItem.author} date={messItem.datetime}
                             key={messItem._id}/>;
          })}
      </div>
    </>


  );
};

export default ChatList;