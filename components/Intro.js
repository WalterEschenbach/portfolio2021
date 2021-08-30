import React from 'react'
import styles from '../styles/Intro.module.css'

function Intro(props) {
    const { windowWidth } = props;
    return (
        <>
            <h1 className={styles.title}>Walter Eschenbach</h1>
            {windowWidth < 500 && (
                <>
                    <p className={styles.description}>
                        Web Developer{' '}
                    </p>
                    <code className={styles.code}><a src="/resume">view resume<span className={styles.one}>.</span><span className={styles.two}>.</span><span className={styles.three}>.</span></a></code>
                </>
            )}
            {windowWidth >= 500 && (
                <>
                    <p className={styles.description}>
                        Web Developer{' '}
                        <code className={styles.code}><a href="/resume">view resume<span className={styles.one}>.</span><span className={styles.two}>.</span><span className={styles.three}>.</span></a></code>
                    </p>
                </>
            )}
        </>
    )
}

export default Intro
