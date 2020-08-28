import React, {useContext} from 'react';

const AppContext = React.createContext({});

const Navbar = () => {
  const { username } = useContext(AppContext);
  return(
    <div>
      <p>{username} from Navbar</p>
    </div>
  )
}

const Message = () => {
  const {username} = useContext(AppContext);
  return(
    <div>
      <p>{username} from Message</p>
    </div>
  )
}

const App = () => {
  return(
    <AppContext.Provider value={{username: 'Some app'}}>
      <Navbar />
      <Message />
    </AppContext.Provider>
  )
}

export default App