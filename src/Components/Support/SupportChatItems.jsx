import React from 'react'

export default function ChatItems({avatar,message,time,isLeft}) {
  return (
    <div className={`chat ${isLeft&&'chat-left'}`}>
    <div className="chat-avatar">
      <a
        className="avatar avatar-online"
        data-toggle="tooltip"
        href="#"
        data-placement="right"
        title=""
        data-original-title="June Lane"
      >
        <img
          src={avatar}
          alt="..."
        />
        <i></i>
      </a>
    </div>
    <div className="chat-body">
      <div className="chat-content">
        <p>
          {message}
        </p>
        <time className="chat-time" datetime="2015-07-01T11:37">
          {time}
        </time>
      </div>
    </div>
  </div>
  )
}
