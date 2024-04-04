import React, { Component } from "react";
import ClientHeader from "./ClientHeader";
import ClientBody from "./ClientBody";
import ClientFooter from "./ClientFooter";

export default class ClientChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title:'Client chat',
        chatList:[
            {
                type:'receive',
                message:'Good morning, sir.What can I do for you?',
                time:'11:37:08 am'
            },
            {
                type:'sent',
                message:'Well, I am just looking around.',
                time:'11:39:08 am'
            },
            {
                type:'receive',
                message:'If necessary, please ask me.',
                time:'11:40:08 am'
            }
        ],
        avatar:{
            support:"https://bootdey.com/img/Content/avatar/avatar1.png",
            client:'https://bootdey.com/img/Content/avatar/avatar2.png'
        }
    };
  }
  handleChatList(message){
    this.setState({
        ...this.state,
        chatList:[
            ...this.state.chatList,
            {
                message,
                type:'sent',
                time:new Date().toLocaleTimeString()
            }
        ]

    })
  }
  render() {
    return (
      <div className="container bootstrap snippets">
        <div className="col-md-7 col-xs-12 col-md-offset-2">
          <div className="panel" id="chat">
            <ClientHeader title={this.state.title}/>
            <ClientBody chatList={this.state.chatList} avatar={this.state.avatar}/>
            <ClientFooter handleSubmit={this.handleChatList.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}
