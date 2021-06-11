import Head from 'next/head'
import Project_Container from '../components/Project_Container'
import Canvas from '../components/Canvas'
import styles from '../styles/Home.module.css'

export default function Home() {

  function randomPosition(w, h) {
    let x = Math.floor(Math.random() * w) + 1;
    let y = Math.floor(Math.random() * h) + 1;
    let dy = Math.random() < 0.5 ? -1 : 1;
    return { x, y, dy }
  }
  function line(ctx, frameCount, k) {
    this.ctx = ctx;
    this.canvasWidth = ctx.canvas.scrollWidth
    this.canvasHeight = ctx.canvas.scrollHeight
    this.startingPosition = randomPosition(this.canvasWidth, this.canvasHeight);
    this.x = this.startingPosition.x;
    this.y = this.startingPosition.y;
    this.dx = 1;
    this.dy = this.startingPosition.dy;
    this.length = 100;
    this.drawLine = function () {
      this.ctx.beginPath()
      this.ctx.moveTo(this.x, this.y + frameCount)
      this.ctx.lineTo(this.x, this.y + this.length + frameCount)
      this.ctx.closePath()
      this.ctx.strokeStyle = '#d7d7d7'
      this.ctx.stroke()
    };
    this.moveLine = function (frameCount) {
      this.y += this.dy;
      if (this.y > this.canvasHeight) {
        this.dy *= -1
      } else if (this.y < -100) {
        this.dy *= -1
      }
    };
    this.logStartingPosition = function () {
      //console.log('x:', this.startingPosition.x)
      //console.log('y:', this.startingPosition.y)
      console.log('canvasHeight:', this.canvasHeight)
      console.log('this.y:', this.y)
    }
  }


  function createLines(ctx, frameCount) {
    let lines = [];
    for (let i = 30; i >= 0; i--) {
      lines[i] = new line(ctx, frameCount, i)
    }

    return lines;
  }


  const draw = (ctx, frameCount, lines) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    lines.forEach((l) => {
      l.drawLine()
      l.moveLine()
      l.logStartingPosition()

    })

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
        createLines={createLines}
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
