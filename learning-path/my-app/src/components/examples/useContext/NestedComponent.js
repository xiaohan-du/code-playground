import React, { useContext } from 'react';

const AppContext = React.createContext({});


const Myform = () => {

    return (
        <AppContext.Provider value={{ title: 'Nested component', name: 'Tom' }}>
            <Section />
        </AppContext.Provider>
    )
}

const Section = () => {
    return (
        <Card />
    )
}

const Card = () => {
    return (
        <>
            <Title />
        </>
    )
}

const Title = () => {
    const { title } = useContext(AppContext);
    const { name } = useContext(AppContext);
    return (
        <>
            <h2>{title}</h2>
            <div>{name}</div>
        </>
    )
}

export default Myform;