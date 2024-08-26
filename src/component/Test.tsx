import React, { useState } from 'react';
import styles from './Test.module.css';
const Test: React.FC  = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isClicked, setIsClicked] = useState(false);

    const handleButtonClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div style={{display:"flex", flexDirection:"column",justifyContent:"start", marginBottom:"50px", gap:"50px"}}
            // className={styles.container}
        >
            <p> Welcome </p>
            <div style={{display:"flex", flexDirection:"row", backgroundColor:"red", justifyContent:"space-between", gap:"50p"}}
                // className={styles.inputGroup}
            >
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    // className={styles.input}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    // className={styles.input}
                />
            </div>
            <button style={{display:"flex", paddingTop:"50px"}}
                // className={`${styles.button} ${isClicked ? styles.buttonClicked : ''}`}
                onClick={handleButtonClick}
            >
                {isClicked ? 'Clicked!' : 'Click Me'}
            </button>
        </div>
    );
};

export default Test;
