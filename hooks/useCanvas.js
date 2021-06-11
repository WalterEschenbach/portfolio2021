import { useRef, useEffect } from 'react'

function resizeCanvas(canvas) {
    const { width, height } = canvas.getBoundingClientRect()

    if (canvas.width !== width || canvas.height !== height) {
        const { devicePixelRatio: ratio = 1 } = window
        const context = canvas.getContext('2d')
        canvas.width = width * ratio
        canvas.height = height * ratio
        context.scale(ratio, ratio)
        return true
    }

    return false
}

const useCanvas = (draw, createLines) => {

    const canvasRef = useRef(null)

    useEffect(() => {

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        resizeCanvas(canvas);
        let frameCount = 0
        let animationFrameId
        let lines = createLines(context, frameCount)

        const render = () => {
            frameCount++
            draw(context, lines)
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw])

    return canvasRef
}

export default useCanvas