import React from 'react'
import styles from '../styles/Profile.module.css'
import { ImUserTie } from 'react-icons/im'

function Profile() {
    return (
        <div className={styles.bioContainer} style={{ height: "fit-content" }}>
            <ImUserTie size="25rem" md={4} />
            <h5 className={styles.bio} md={8}>
                {`Hello, my name is Walter Eschenbach. I am a web developer with more than 2 years of experience developing with JavaScript and its many frameworks, libraries, and other web technologies. `}
                <br />
                <br />
               {`I started my career in the world of finance & Consulting and have five years of professional experience in that arena (most recently at Deloitte Consulting). I'm passionate about web development and am currently seeking opportunities to join a new dev team!`}
                <br />
                <br />
               {`Please see examples of my work above - if you have any questions, or if there is any additional information I can provide, or if you would simply like to connect... there are links to socials on the right side of the page above. Thank you!`}
            </h5>
            <img src="pattern4.svg" alt="pattern4" className={styles.pattern4} />

        </div>
    )
}

export default Profile
