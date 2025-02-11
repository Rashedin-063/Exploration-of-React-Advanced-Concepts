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

const Message = ({ count, handleMessageIncrement }) => {
  console.log('hello from message');
  return (
    <div>
      <p className="text-center text-xl">{count} messages sent</p>
      <button className='bg-sky-800 text-white text-sm px-4 py-1 pb-2 rounded-full my-5'  onClick={handleMessageIncrement}>Send Message</button>
    </div>
  );

};

export default memo(Message);





