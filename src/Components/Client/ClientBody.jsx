import React from "react";
import ClientChatItems from "./ClientChatItems";

export default function ClientBody({ chatList, avatar }) {
  const chatElements = chatList?.map((e, index) => {
    const isLeft = e.type === "receive";
    return (
      <ClientChatItems
        key={index}
        title={e.title}
        avatar={isLeft ? avatar.support : avatar.client}
        message={e.message}
        time={e.time}
        isLeft={isLeft}
      />
    );
  });
  return (
    <div className="panel-body">
      <div className="chats">
        {chatElements}
      </div>
    </div>
  );
}
