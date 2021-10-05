import React from 'react'
import styles from '../styles/Home.module.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { VscFilePdf } from 'react-icons/vsc'

const Socials = () => {

    return (
        <div className={styles.socials}>
            <a href="/resume">
                <div className={styles.socialIconContainers}>
                    <VscFilePdf size={30} className={styles.socialIcons} />
                </div>
            </a>
            <a href="https://github.com/WalterEschenbach">
                <div className={styles.socialIconContainers}>
                    <FaGithub size={30} className={styles.socialIcons} />
                </div>
            </a>
            <a href="https://www.linkedin.com/in/waltereschenbach">
                <div className={styles.socialIconContainers}>
                    <FaLinkedin size={30} className={styles.socialIcons} />

                </div>
            </a>

        </div>
    )
}

export default Socials
