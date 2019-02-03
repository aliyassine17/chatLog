import moment from 'moment';

// timestamp to human readable function
export const timestampToHumanReadable = (timestamp) => {
  const date = new Date(timestamp);
  const valid = (date instanceof Date && !isNaN(date.valueOf()));
  if (!valid){
    return null;
  }
  return `${ moment(timestamp).format('DD MMM YYYY') }, ${ moment(timestamp).format('HH:mm:ss') }`;
};

// sort array of message by date DESC
const sortMessageByDate = (messages) =>{
  let sortedMessages = [] ;
  if (Array.isArray(messages)){
    sortedMessages = [...messages];
  }
  sortedMessages.sort(function(a, b) {
    const dateA = new Date(a.timestamp), dateB = new Date(b.timestamp);
    return dateB - dateA;
  });
  return sortedMessages;
};


// data formatter as per the requirements
export const dataFormatter  = (messages, members)  => {
  const sortedMessages = sortMessageByDate(messages);
  const result = sortedMessages.map( msg => {
    const {
      id,
      message,
      timestamp,
      userId
    } = msg;
    const user = members.find(member => member.id === userId);
    const {
      firstName,
      lastName,
      email,
      avatar
    } = user;
    return {
      messageId: id,
      userId,
      fullName: `${ firstName } ${ lastName }`,
      timestamp: timestampToHumanReadable(timestamp),
      email,
      message,
      avatar
    };
  });
  return result;
};

