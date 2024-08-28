'use client'
import React, { useState } from 'react';
import styles, {TestType} from './Test.type';
const Test   = ({message , isClicked, handleButtonClick}:TestType) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    return (
        <div className={styles.subContainer}>
            <p> Welcome {message}</p>
            <div className={styles.inputGroup}>
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={styles.input}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={styles.input}
                />
            </div>
            <button className={`${styles.button} ${isClicked ? styles.buttonClicked : ''}`}
                onClick={handleButtonClick}>
                {isClicked ? 'Clicked!' : 'Click Me'}
            </button>
        </div>
    );
};

export default Test;
