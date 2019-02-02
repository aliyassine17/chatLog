import React, { Component, Fragment } from  'react';
import { PropTypes } from 'prop-types';
import './style.css';
import ChatMessage from './../ChatMessage';


class ChatList extends Component{
  constructor(props){
    super(props);
    this.state = {
      showRecords: 10
    };
    this.handleChange =  this.handleChange.bind(this);
  }

  handleChange(e){
    const { name,value } = e.target;
    this.setState({
      [name]:value
    });
  }
  render(){

    const { showRecords } = this.state;
    const { chatLog } = this.props;

    if (!chatLog){
      return null;
    }

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


ChatList.propTypes = {
  chatLog: PropTypes.arrayOf(
    PropTypes.shape({
      messageId: PropTypes.string,
      userId: PropTypes.string,
      fullName: PropTypes.string,
      timestamp: PropTypes.string,
      email: PropTypes.string,
      message: PropTypes.string,
      avatar: PropTypes.string
    })
  )
};

ChatMessage.defaultProps = {
  chatLog: []
};


export default ChatList;