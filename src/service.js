import {
  getMessages,
  getMembers
} from './data';

import { dataFormatter } from './utils';

const getChatLog = async() => {
  const [messages, members] = await Promise.all([
    getMessages(),
    getMembers()
  ]);
  const result = dataFormatter(messages, members);
  return Promise.resolve(result);
};
export default getChatLog;



export function old_getChatLog() {
  return Promise.resolve([{
    messageId: '12356',
    userId: '613651251',
    fullName: 'Robin Balmforth',
    timestamp: new Date()
      .toISOString(),
    email: 'robin@example.com',
    message: 'Hello, World!',
    avatar: null
  }]);
}
