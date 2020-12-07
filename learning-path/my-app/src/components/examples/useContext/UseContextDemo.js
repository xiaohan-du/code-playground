import React, { useContext } from 'react';

const AppContext = React.createContext({});

const Navbar = () => {
    const { username } = useContext(AppContext);
    return (
        <p>{username}</p>
    )
}

const Messages = () => {
    const { username } = useContext(AppContext);
    return (
        <p>Message for {username}</p>
    )
}

const UseContextDemo = () => {
    return (
        <AppContext.Provider value={{
            username: 'Tom'
        }}>
            <div>
                <Navbar />
                <Messages />
            </div>
        </AppContext.Provider>
    )
}

export default UseContextDemo;