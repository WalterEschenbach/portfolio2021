import React, { useEffect, useState } from 'react'
import { ProgressBar } from 'react-bootstrap'
import styles from '../styles/Scroll.module.css'

function ScrollBar() {
    const [scrollY, setScrollY] = useState()
    const [scrollHeight, setScrollHeight] = useState()
    const [scrollProgress, setScrollProgress] = useState()

    useEffect(() => {
        let docHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        setScrollHeight(docHeight - window.innerHeight)
    }, [])

    useEffect(() => {

        const handleScroll = () => {
            setScrollY(document.documentElement.scrollTop);
            setScrollProgress(Math.round((scrollY / scrollHeight) * 100))

        }

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollY])



    return (
        <ProgressBar className={styles.progressBar} now={scrollProgress} />
    )
}

export default ScrollBar
