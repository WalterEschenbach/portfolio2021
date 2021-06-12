import React from 'react'
import styles from '../styles/Project.module.css'
import { FaGithub } from 'react-icons/fa'

function Button(props) {
    return (
        <div className={styles.buttons}>
            <a className={styles.gitButton} to={props.link}>
                <FaGithub className={styles.gitIcon} />
                <h4>GitHub</h4>
            </a>
        </div>
    )
}

export default Button
