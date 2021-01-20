import React, { useEffect, useState } from 'react';

const SetUserProfile = ({ userId, userName }) => {
    const [user, setUser] = useState('');
    useEffect(() => {
        setUser(userId + '. ' + userName);
    }, [userId, userName]);
    return (
        <>
            <p>User: {user}</p>
        </>
    )
}

export default SetUserProfile;