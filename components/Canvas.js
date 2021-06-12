
import React from 'react'
import useCanvas from '../hooks/useCanvas'
import styles from '../styles/Canvas.module.css'

const Canvas = props => {

    const { height, draw, createLines, ...rest } = props
    const canvasRef = useCanvas(draw, createLines)

    return <canvas id={styles.canvas} ref={canvasRef} style={{ height: height }} {...rest} />
}

export default Canvas
