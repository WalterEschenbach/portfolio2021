import Head from 'next/head'
import Project_Container from '../components/Project_Container'
import Canvas from '../components/Canvas'
import styles from '../styles/Home.module.css'

export default function Home() {
  const line = {
    x: 100,
    y: 100,
    length: 100,
    dx: 5,
    dy: 5
  }
  function drawLine(ctx) {
    ctx.beginPath()
    ctx.moveTo(line.x, line.y)
    ctx.lineTo(line.x, line.y + 200)
    ctx.stroke()
  }

  function updateLine(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    // Draw Line
    drawLine(ctx)
    // Change Position
    line.y += line.dy

  }



  const draw = (ctx, frameCount) => {
    updateLine(ctx)
  }

  return (
    <div className={styles.container}>
      {/* <F lair /> */}
      <Head>
        <title>Walter Eschenbach</title>
        <link rel="icon" href="/business_suit_icon.svg" />
      </Head>
      <Canvas
        className="App-canvas"
        draw={draw}
      />
      <main className={styles.main}>

        <h1 className={styles.title}>
          Walter Eschenbach
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <Project_Container />
      </main>

      <footer className={styles.footer}>
        Thank you for your time and consideration.
      </footer>
    </div>
  )
}
