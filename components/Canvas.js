
import React from 'react'
import useCanvas from '../hooks/useCanvas'
import styles from '../styles/Canvas.module.css'

const Canvas = props => {

    const { draw, ...rest } = props
    const canvasRef = useCanvas(draw)

    return <canvas id={styles.canvas} ref={canvasRef} {...rest} />
}

export default Canvas
