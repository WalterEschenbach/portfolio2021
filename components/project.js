import React, { useState } from 'react'
import ProjectModal from './ProjectModal'
import Button from './Button'
import styles from '../styles/Project.module.css'
import { FaGithub } from 'react-icons/fa'
import { FaLink } from 'react-icons/fa'

export const Project = (props) => {
  const [show, setShow] = useState(false)

  const handleShow = (e) => {
    console.log('e.target:',e.target)
    setShow(true)
  }
  const handleClose = () => {
    setShow(false)
  }

  return (
    <React.Fragment>
      <ProjectModal
        handleClose={handleClose}
        show={show} link={props.link}
        title={props.title}
        icon={props.icon}
        github={props.github}
        tech={props.tech}
        description={props.description}

      />
      <div className={styles.card} onClick={handleShow}>
        <div className={styles.cardTop}>
          <h3>{props.title} &rarr;</h3>
        </div>
        <p style={{ cursor: "default" }}>{props.description}</p>
        <div className={styles.projectButtonContainer}>
          <button className={styles.projectButton}>
            <FaLink style={{ margin: "2px" }} size={20} />
            <p>Website</p>
          </button>
          <button className={styles.projectButton}>
            <FaGithub style={{ margin: "2px 2px" }} size={20} />
            <p style={{ margin: "2px 2px" }}>Github</p>
          </button>
        </div>
      </div>

    </React.Fragment>
  )
}
