import React from 'react';

const MessageContext = React.createContext({
    username: 'message username',
    setUsername: () => {}
})

export default MessageContext;