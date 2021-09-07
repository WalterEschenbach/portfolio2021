import React from 'react'
import styles from '../styles/Intro.module.css'
import { FiExternalLink } from 'react-icons/fi'

function Intro(props) {
    const { windowWidth } = props;
    const resumeIconStyle = {
        color: "white"
    }
    return (
        <>
            <h1 className={styles.title}>Walter Eschenbach</h1>
            {windowWidth < 500 && (
                <>
                    <p className={styles.description}>
                        Web Developer{' '}
                    </p>
                    <code className={styles.code}><a src="/resume" target="_blank">view resume<span className={styles.one}>.</span><span className={styles.two}>.</span><span className={styles.three}>.</span></a></code>
                </>
            )}
            {windowWidth >= 500 && (
                <>
                    <p className={styles.description}>
                        Web Developer{' '}
                    </p>
                    <a href="/resume" target="_blank" style={{ position: "absolute", top: "10px", right: "10px" }}>
                        <div style={{ background: "#4C4E52", borderRadius: "10px", boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.2)", height: "4rem", padding: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <h3 style={{ marginRight: "5px", color: "#FFF" }}>Resume</h3>

                                <FiExternalLink size={20} style={resumeIconStyle} />

                            </div>
                        </div>
                    </a>
                </>
            )}
        </>
    )
}

export default Intro
