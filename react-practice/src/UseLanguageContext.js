import React, { useState } from 'react';
import LanguageContext from './components/LanguageContext';
import LanguageSwitcher from './components/LanguageSwitcher';

const UseLanguageContext = () => {
    const [language, setLanguage] = useState('en');
    const value = { language, setLanguage };

    return (
        <LanguageContext.Provider value={value}>
            <h2>Current Language: {language}</h2>
            <p>Click button to change to jp</p>
            <div>
                <LanguageSwitcher />
            </div>
        </LanguageContext.Provider>
    )
}

export default UseLanguageContext;