import React, { Component } from 'react'
import styles from '../styles/Project.module.css'
import { Project } from './project'

const projects = [
    {
        link: "https://nextjs.org/docs",
        title: "Tutorial Gel",
        description: "Find in-depth information about Next.js features and API."
    },
    {
        link: "https://nextjs.org/learn",
        title: "Group Trip App",
        description: 'Learn about Next.js in an interactive course with quizzes!'
    },
    {
        link: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
        title: "Code Collab",
        description: 'Instantly deploy your Next.js site to a public URL with Vercel.'
    },
    {
        link: "#",
        title: "YouTube Mapper",
        description: 'Discover and deploy boilerplate example Next.js projects.'
    }
]


export default class Project_Container extends Component {


    render() {
        return (
            <div className={styles.grid}>
                {projects.map(project => (
                    <Project link={project.link} title={project.title} key={project.title} description={project.description} />))
                }
            </div>
        )
    }
}
