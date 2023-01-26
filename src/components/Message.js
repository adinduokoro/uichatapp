import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://pbs.twimg.com/profile_images/1564375315526275072/7Xnua7BM_400x400.jpg" alt="" />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p>New Message</p>
        <img src="https://pbs.twimg.com/profile_images/1564375315526275072/7Xnua7BM_400x400.jpg" alt="" />
      </div>
    </div>
  )
}

export default Message