import React, {useState} from 'react'
import styles from '../styles/MobileNav.module.css'

const MobileNav = () => {
    const [opened, setOpened] = useState(true)
    const [buttonClass, setButtonClass] = useState(styles.menu)

    const handleClick = () =>{
        setOpened(!opened)
        const currentClass = opened?`${styles.menu} ${styles.opened}`:styles.menu
        setButtonClass(currentClass)
    }
    
    return (
        <React.Fragment>
            <button className={buttonClass} onClick={handleClick} aria-label="Main Menu">
                <svg className={styles.svg}  viewBox="0 0 100 100">
                    <path className={`${styles.line} ${styles.line1}`} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                    <path className={`${styles.line} ${styles.line2}`} d="M 20,50 H 80" />
                    <path className={`${styles.line} ${styles.line3}`} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                </svg>
            </button>
            <nav className={opened?styles.navcontaineractive:styles.navcontainer}>
                <div className={styles.resume}></div>
                <div className={styles.email}></div>
                <div className={styles.linkedin}></div>
                <div className={styles.github}></div>
            </nav>
        </React.Fragment>
    )
}

export default MobileNav