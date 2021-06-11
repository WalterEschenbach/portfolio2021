import React from 'react'
import Button from '../components/Button'
import styles from '../styles/Project.module.css'

export const Project = (props) => {
  return (
    <React.Fragment>
      <a href={props.link} className={styles.card}>
        <h3>{props.title} &rarr;</h3>
        <p>{props.description}</p>
        <Button link={props.githubLink} />
      </a>
    </React.Fragment>
  )
}
