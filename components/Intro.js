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
                    <code className={styles.code}>view projects<span class={styles.one}>.</span><span class={styles.two}>.</span><span class={styles.three}>.</span></code>
                </>
            )}
            {windowWidth >= 500 && (
                <>
                    <p className={styles.description}>
                        Web Developer{' '}
                        <code className={styles.code}>view projects<span class={styles.one}>.</span><span class={styles.two}>.</span><span class={styles.three}>.</span></code>
                    </p>
                </>
            )}
        </>
    )
}

export default Intro
