import React from 'react'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { DiCss3Full, DiJavascript1, DiMongodb, DiReact } from 'react-icons/di'
import styles from '../styles/Technology.module.css'

function Technology() {
    const iconSize = "7rem"
    return (
        <div className={styles.container}>
            <AiOutlineHtml5 size={iconSize} />
            <DiCss3Full size={iconSize} />
            <DiJavascript1 size={iconSize} />
            <DiMongodb size={iconSize} />
            <DiReact size={iconSize} />


        </div>
    )
}

export default Technology
