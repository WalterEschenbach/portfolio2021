import Head from 'next/head'
import { useRef, useEffect, useState } from 'react'
import Project_Container from '../components/Project_Container'
import ScrollBar from '../components/ScrollBar'
import Canvas from '../components/Canvas'
import Intro from '../components/Intro'
import Profile from '../components/Profile'
import Technology from '../components/Technology'
import { RiArrowDownSLine } from 'react-icons/ri'
import ScrollAnimation from 'react-animate-on-scroll';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [projectDivHeight, setProjectDivHeight] = useState()
  const [windowWidth, setWindowWidth] = useState()

  const projectDiv = useRef(null)
  useEffect(() => {
    setProjectDivHeight(projectDiv.current?.scrollHeight + (window.innerHeight * 0.2))
    setWindowWidth(projectDiv.current?.scrollWidth)
  }, [projectDiv.current?.scrollHeight])

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
  // useEffect(() => {
  //   window.addEventListener('scroll', () => console.log(window.scrollY));

  // })

  const scrollDown = () => {
    window.scrollTo(0, 2000)
  }

  return (
    <div className={styles.container}>

      <Head>
        <title>Walter Eschenbach</title>
        <link rel="icon" href="/business_suit_icon.svg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.compat.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossorigin="anonymous"
        />
      </Head>
      {windowWidth < 500 && (
        <Canvas
          draw={draw}
          createLines={createLines}
          height={projectDivHeight}
        />
      )}
      {windowWidth >= 500 && (
        <Canvas
          draw={draw}
          createLines={createLines}
        />
      )}
      {windowWidth >= 500 && (
        <ScrollBar />
      )}

      <main className={styles.main}>
        <div ref={projectDiv} className={styles.projectDiv}>
          <Intro windowWidth={windowWidth} />
          <Project_Container />
        </div>
        <RiArrowDownSLine className={styles.downArrow} size="3rem" onClick={() => scrollDown()} />
        <div style={{ width: "100%", borderBottom: "1px solid #eaeaea", display: "flex", justifyContent: "center" }}>
          <ScrollAnimation animateIn="fadeIn">
            <Profile />
          </ScrollAnimation>
        </div>

        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <ScrollAnimation animateIn="fadeIn" style={{ display: "flex", justifyContent: "center" }}>
            {windowWidth >= 500 ? <Technology iconSize="7rem" /> : <Technology iconSize="3rem" />}
          </ScrollAnimation>
        </div>
      </main>

      <footer className={styles.footer}>
        Thank you for your time and consideration.
      </footer>
    </div>
  )
}
