import React, { useState } from 'react'
import ProjectModal from './ProjectModal'
import Button from './Button'
import styles from '../styles/Project.module.css'

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
      <ProjectModal handleClose={handleClose} show={show} />
      <div className={styles.card} onClick={handleShow}>
        <h3>{props.title} &rarr;</h3>
        <p>{props.description}</p>
        {/* <Button link={props.githubLink} /> */}
      </div>

    </React.Fragment>
  )
}
