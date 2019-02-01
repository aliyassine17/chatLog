import React, {
  Component
} from 'react';
import './App.css';
import ChatList from './view/ChatList';

class App extends Component {
  render() {
    return (
      <div className="AppContainer">
        <ChatList key="chatList"></ChatList>
      </div>
    );
  }
}

export default App;