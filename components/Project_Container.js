import React, { Component } from 'react'
import styles from '../styles/Project.module.css'
import { Project } from './project'

const projects = [
    {
        link: "https://github.com/WalterEschenbach/mern-heroku-netlify",
        title: "Mern-Heroku-Netlify",
        description: "Template to deploy a MERN web application on Heroku and Netlify!",
        icon: '/mern-icon.jpg',
        github: "https://github.com/WalterEschenbach/mern-heroku-netlify",
        tech: [
            "React", "MongoDB", "Express", "Node"
        ]
    },
    {
        link: "https://romantic-edison-5bc7d1.netlify.app/",
        title: "Github Battle",
        description: 'Instantly compare the most popular repositories on GitHub.',
        icon: '/github-icon.png',
        github: "https://github.com/WalterEschenbach/github-battle",
        tech: [
            "React", "Netlify"
        ]
    },
    {
        link: "https://nerf-landing.vercel.app/",
        title: "Nerf Perks",
        description: 'Landing page for NERF Perks based on Dr.Pepper Perks!',
        icon: "/nerf-icon.jpg",
        github: "https://github.com/WalterEschenbach/nerf-landing",
        tech: [
            "React", "CSS"
        ]
    },
    {
        link: "https://esch-weather-app.herokuapp.com/",
        title: "Weather App",
        description: 'Express JS app that uses multiple api\'s to display the weather.',
        icon: '/weather-icon.png',
        github: "https://github.com/WalterEschenbach/weather-app",
        tech: [
            "React", "Netlify", "Heroku"
        ]
    }
]


export default class Project_Container extends Component {


    render() {
        return (
            <div className={styles.grid}>
                {projects.map(project => (
                    <Project
                        link={project.link}
                        title={project.title} key={project.title}
                        description={project.description}
                        github={project.github}
                        icon={project.icon}
                        tech={project.tech}
                    />))
                }
            </div>
        )
    }
}
