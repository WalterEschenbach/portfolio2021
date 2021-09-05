import React, { useState } from 'react'
import ProjectModal from './ProjectModal'
import Button from './Button'
import styles from '../styles/Project.module.css'
import { FaGithub } from 'react-icons/fa'
import { FaLink } from 'react-icons/fa'

export const Project = (props) => {
  const [show, setShow] = useState(false)

  const handleShow = () => {
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
          <div className={styles.cardIcons}>
            <a href={props.link}><FaLink style={{ borderRadius: "100%" }} size={20} /></a>
            <a href={props.github}><FaGithub style={{ marginLeft: "8px", borderRadius: "100%" }} size={20} /></a>


          </div>
        </div>
        <p>{props.description}</p>
        <div style={{ width: "100%", }}>
          v
        </div>
      </div>

    </React.Fragment>
  )
}
