import getChatLog from './service';

// This is just a sample test to show you the desired format and fields, feel free to delete it.



it('returns the correct format', () => {
  return getChatLog().then(([firstMessage]) => {
    expect(typeof firstMessage.messageId).toBe('string');
    expect(typeof firstMessage.userId).toBe('string');
    expect(typeof firstMessage.fullName).toBe('string');
    expect(typeof firstMessage.timestamp).toBe('string');
    expect(typeof firstMessage.email).toBe('string');
    expect(typeof firstMessage.message).toBe('string');
    expect(firstMessage.avatar === null || typeof firstMessage === 'object').toBeTruthy();
  });
});
it('shou return an array of chat logs', () => {
  return getChatLog().then((result) => {
    expect(Array.isArray(result)).toBeTruthy();
  });
});
it('shou return an array of 100 messages', () => {
  return getChatLog().then((result) => {
    expect(result.length).toBe(100);
  });
});


