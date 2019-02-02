import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FetchChatLogFromApi from '../../model/messages/actions';
import ChatList from './../../view/ChatList';



export class ChatListContainer extends React.Component {
  componentDidMount(){
    this.props.fetchChatLog();
  }
  render(){
    const { chatLog } = this.props;
    return (
      <ChatList key="ChatList" chatLog={chatLog}></ChatList>
    );
  }
}

ChatListContainer.propTypes = {
  chatLog: PropTypes.array,
  status: PropTypes.object,
  fetchChatLog: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    chatLog: state.chatLogReducer.chatLog,
    status: state.chatLogReducer.status
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchChatLog: () => FetchChatLogFromApi(dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(ChatListContainer);