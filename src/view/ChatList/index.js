import React, { Component, Fragment } from  'react';
import './style.css';
import ChatMessage from './../ChatMessage';
import getChatLog from './../../service';


class ChatList extends Component{
  constructor(){
    super();
    this.state = {
      chatLog: [],
      showRecords: 10
    };
    this.handleChange =  this.handleChange.bind(this);
  }
  componentDidMount(){
    getChatLog().then(chatLog =>{
      this.setState({
        chatLog
      });
    });
  }
  handleChange(e){
    const { name,value } = e.target;
    this.setState({
      [name]:value
    });
  }
  render(){
    const { chatLog,showRecords } = this.state;
    let displayPerPage = 10;
    if (!isNaN(showRecords) && showRecords <= chatLog.length ){
      displayPerPage = showRecords;
    }

    const displayList = chatLog.slice(0,displayPerPage);

    const list = displayList.map( chat => (<ChatMessage key={chat.messageId} {...chat} ></ChatMessage>));
    return (
      <Fragment>
        <div className="filter">
          <label htmlFor="showRecords">Records per page </label>
          <input name="showRecords" id="showRecords"
            type="number" value={showRecords}
            onChange={this.handleChange}
            min="1" max={chatLog.length}
          ></input>
        </div>
        <div className="messages">
          {list}
        </div>
      </Fragment>
    );
  }

}




export default ChatList;