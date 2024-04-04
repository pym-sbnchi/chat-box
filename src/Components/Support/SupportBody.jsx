import React from "react";
import ChatItems from "./SupportChatItems";

export default function Body({ chatList, avatar }) {
  const chatElements = chatList?.map((e, index) => {
    const isLeft = e.type === "receive";
    return (
      <ChatItems
        key={index}
        title={e.title}
        avatar={isLeft ? avatar.client : avatar.support}
        message={e.message}
        time={e.time}
        isLeft={isLeft}
      />
    );
  });
  return (
    <div className="panel-body">
      <div className="chats">{chatElements}</div>
    </div>
  );
}
