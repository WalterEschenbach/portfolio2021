import Head from 'next/head'
import Project_Container from '../components/Project_Container'
import Canvas from '../components/Canvas'
import { RiArrowDownSLine } from 'react-icons/ri'
import styles from '../styles/Home.module.css'

export default function Home() {

  function randomPosition(w, h) {
    let x = Math.floor(Math.random() * w) + 1;
    let y = Math.floor(Math.random() * h) + 1;
    let fifty = Math.random() < 0.5 ? -1 : 1;
    return { x, y, fifty }
  }
  function line(ctx) {
    this.ctx = ctx;
    this.canvasWidth = ctx.canvas.scrollWidth
    this.canvasHeight = ctx.canvas.scrollHeight
    this.startingPosition = randomPosition(this.canvasWidth, this.canvasHeight);
    this.x = this.startingPosition.x;
    this.y = this.startingPosition.y;
    this.dx = this.startingPosition.fifty;
    this.dy = this.startingPosition.fifty;
    this.length = 100;
    this.vertical = (Math.random() > 0.5)
    this.drawLine = function () {
      this.ctx.beginPath()
      if (this.vertical) {
        this.ctx.moveTo(this.x, this.y)
        this.ctx.lineTo(this.x, this.y + this.length)
      } else {
        this.ctx.moveTo(this.x, this.y)
        this.ctx.lineTo(this.x + this.length, this.y)
      }
      this.ctx.closePath()
      this.ctx.strokeStyle = '#d7d7d7'
      this.ctx.stroke()
    };
    this.moveLine = function () {
      if (this.vertical) {
        this.y += this.dy;
        if (this.y > this.canvasHeight) {
          this.dy *= -1
        } else if (this.y < -100) {
          this.dy *= -1
        }
      } else {
        this.x += this.dx;
        if (this.x > this.canvasWidth) {
          this.dx *= -1
        } else if (this.x < -100) {
          this.dx *= -1
        }
      }
    };
  }


  function createLines(ctx, frameCount) {
    let lines = [];
    for (let i = 15; i >= 0; i--) {
      lines[i] = new line(ctx, frameCount, i)
    }
    return lines;
  }


  const draw = (ctx, lines) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    lines.forEach((l) => {
      l.drawLine()
      l.moveLine()
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
        draw={draw}
        createLines={createLines}
      />
      <main className={styles.main}>
        <div style={{ height: "74vh" }}>
          <h1 className={styles.title}>Walter Eschenbach</h1>
          <p className={styles.description}>
            Web Developer{' '}
            <code className={styles.code}>view projects...</code>
          </p>
          <Project_Container />
        </div>
        <RiArrowDownSLine size="3rem" />
        <div className={styles.bio} style={{ border: "1px solid red", height: "400px", width: "100%" }}>Hello World</div>
      </main>
      <footer className={styles.footer}>
        Thank you for your time and consideration.
      </footer>
    </div>
  )
}
