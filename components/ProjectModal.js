import React, { useState } from 'react'
import Image from 'next/image'
import { Modal } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import styles from '../styles/Module.module.css'

function ProjectModal(props) {

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={styles.topContainer} >
                        <div className={styles.iconContainer} >
                            <Image src={props.icon} layout="fill" objectFit="contain" alt={`icon for ${props.title}`} />
                        </div>
                        <div style={{ overflowWrap: "normal" }} className="snippet">{props.description}</div>
                    </div>


                    <div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                        <div>
                            <h2>Links:</h2>
                            <ul>
                                <a href={props.github}><h4><li>Github</li></h4></a>
                                <a href={props.link}><h4><li>site</li></h4></a>
                            </ul>
                        </div>
                        <div>
                            <h2>Technologies:</h2>
                            <ul>
                                {props.tech.map(t => {
                                    return <li key={t}><h4>{t}</h4></li>
                                })}
                            </ul>
                        </div>


                    </div>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ProjectModal
