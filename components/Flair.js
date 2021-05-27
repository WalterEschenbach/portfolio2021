import React from 'react'
import styles from '../styles/Flair.module.css'

function Flair() {
    return (
        <div className={styles.flair}>
            <a className={styles.flairTag} href="https://stackoverflow.com/users/3098277/walter">
                <img className={styles.flairImage} src="https://stackoverflow.com/users/flair/3098277.png?theme=clean" width="208" height="58" alt="profile for Walter at Stack Overflow, QA for professional and enthusiast programmers" title="profile for Walter at Stack Overflow, QA for professional and enthusiast programmers" />
            </a>
        </div>
    )
}

export default Flair
