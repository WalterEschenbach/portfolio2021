import React from 'react'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { DiCss3Full, DiJavascript1, DiMongodb, DiReact } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import styles from '../styles/Technology.module.css'

function Technology() {
    const iconSize = "7rem"
    return (
        <div className={styles.container}>
            <DiJavascript1 size={iconSize} />
            <AiOutlineHtml5 size={iconSize} />
            <DiCss3Full size={iconSize} />
            <FaNodeJs size={iconSize} />
            <DiMongodb size={iconSize} />
            <DiReact size={iconSize} />


        </div>
    )
}

export default Technology
