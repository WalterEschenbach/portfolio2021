import React, { Component } from 'react'
import styles from '../styles/Project.module.css'
import { Project } from './project'

const projects = [
    {
        link: "https://nextjs.org/docs",
        title: "Day Decider",
        description: "Full-stack web app for a group to decide what day works best!",
        github: "https://github.com/WalterEschenbach/DayDecider"
    },
    {
        link: "https://nerf-landing.vercel.app/",
        title: "Nerf Perks",
        description: 'Landing page for NERF Perks based on Dr.Pepper Perks!'
    },
    {
        link: "https://romantic-edison-5bc7d1.netlify.app/",
        title: "Github Battle",
        description: 'Instantly compare the most popular repositories on GitHub.'
    },
    {
        link: "https://esch-weather-app.herokuapp.com/",
        title: "Weather App",
        description: 'Simple Express JS app that uses multiple api\'s to display the current weather.'
    }
]


export default class Project_Container extends Component {


    render() {
        return (
            <div className={styles.grid}>
                {projects.map(project => (
                    <Project link={project.link} title={project.title} key={project.title} description={project.description} githubLink={project.github} />))
                }
            </div>
        )
    }
}
