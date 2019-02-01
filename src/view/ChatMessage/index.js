import React , { Component } from  'react';
import { PropTypes } from 'prop-types';
import './style.css';
import avatarLogo from './../../assets/avatar.png';


class ChatMessage extends Component{
  constructor(props){
    super(props);
    this.state = {
      showEmail : false
    };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }
  mouseEnter() {
    this.setState({
      showEmail: true
    });
  }
  mouseLeave(){
    this.setState({
      showEmail: false
    });
  }
  render(){
    const { message,fullName, timestamp, avatar, email } = this.props;
    const { showEmail } = this.state;
    return (
      <div className="container"
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}>
        <img src={avatar || avatarLogo} alt="Avatar" />
        <div className="fullname">{fullName}</div>
        <div className="email">{showEmail && email}</div>
        <div className="message">{message}</div>
        <span className="time time-right">{timestamp}</span>
      </div>
    );
  }
}

ChatMessage.propTypes = {
  messageId: PropTypes.string,
  userId: PropTypes.string,
  fullName: PropTypes.string,
  timestamp: PropTypes.string,
  email: PropTypes.string,
  message: PropTypes.string,
  avatar: PropTypes.string
};

ChatMessage.defaultProps = {
  avatar: null
};

export default ChatMessage;