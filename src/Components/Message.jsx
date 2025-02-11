/* eslint-disable react/prop-types */
import { memo } from "react"

// const Message = memo( () => {
//   console.log('hello from message');
//   return <p>0 messages sent</p>;
// });

// Message.displayName = 'Message';
// export default Message;


// const Message = memo( function messageComponent () {
//   console.log('hello from message');
//   return <p>0 messages sent</p>;
// });
// export default Message;

const Message = ({count}) => {
  console.log('hello from message');
  return <p>{count} messages sent</p>;
};

export default memo(Message);





