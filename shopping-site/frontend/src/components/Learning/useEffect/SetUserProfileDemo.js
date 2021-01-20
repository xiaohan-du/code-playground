import React, { useState } from 'react';
import SetUserProfile from './SetUserProfile';

const userInfo = [
    {
        id: 1,
        name: 'Tom'
    },
    {
        id: 2,
        name: 'John'
    }
];


const SetUserProfileDemo = () => {
    const [userProf, setUserProf] = useState(userInfo[0]);
    const updateUserProfile = () => {
        setUserProf(userInfo[1])
    };
    return (
        <>

            <SetUserProfile userId={userProf.id} userName={userProf.name} />
            <button onClick={updateUserProfile}>Update</button>
        </>
    )
}

export default SetUserProfileDemo;