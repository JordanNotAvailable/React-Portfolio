import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Weather from '../../assets/images/Weather-App.png'
import EmployeeTracker from '../../assets/images/Employee-Tracker.png'
import TeamChat from '../../assets/images/Team-Chat.png'
import ChatSupport from '../../assets/images/Chat-Support.png'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Projects = () => {
    const projects = [
        {
            link: 'https://github.com/JordanNotAvailable/weather-dashboard',
            image: Weather,
            deployed: "https://jordannotavailable.github.io/weather-dashboard/",
            name: 'Weather Dashboard',
            description: 'A weather app giving you the ability to search any city or area to find the weather for next 12hours!',
            stack: 'Tech Stack: HTML, CSS, JavaScript',
            alt: 'image of weather dashboard'
        },
        {
            link: 'https://github.com/JordanNotAvailable/Employee-Tracker',
            image: EmployeeTracker,
            name: 'Employee Tracker',
            description: 'An in terminal showing of questions to help a user build, update and delete whats required for their work place.',
            stack: 'Tech Stack: JavaScript',
            alt: "image of Employee Tracker"
        },
        {
            link: 'https://github.com/JordanNotAvailable/chat-support',
            image: ChatSupport,
            deployed: "https://chat-support-999.herokuapp.com/",
            name: 'Chat Support',
            description: 'A tech chat support system allowing users to communicate with an admin to assist with all issues inquired.',
            stack: 'Tech Stack: JavaScript, HTML, CSS, MySQL, Express, Socket.io, Lint, EJS',
            alt: 'image of Chat Support'
        },
        {
            link: 'https://github.com/JordanNotAvailable/team-chat',
            image: TeamChat,
            // deployed: "ggamb.github.io/photo-port/",
            name: 'Team Chat',
            description: 'A work in progress project create a hub for users to make friends and play games together!',
            stack: 'Tech Stack: MERN stack',
            alt: 'image of Team Chat'
        },
    ]

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        return setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000);
      }, []);

    return (
        <>
          <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['P', 'r', 'o', 'j', 'e', 'c ', 't', 's']}
                    idx={15}
                    />
                </h1>
                <section id="my-work" className="portfolio-holder">
                <div className="portfolio-module-holder">
                    {
                        projects.map(project => {
                            return (
                                <>
                                    <div className='portfolio-container' key={project.name}>
                                        <img src={project.image} alt={project.alt} className='portfolio-image' />
                                        <div className='middle'>
                                            <div className='portfolio-text'>
                                                <a href={project.link} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" color="white" className="anchor-icon" /></a>
                                                <a href={project.deployed} target="_blank" rel="noreferrer" className='project-link-text'><h3>{project.name}</h3></a>
                                                <h4>{project.description}</h4>
                                                <h5>{project.stack}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        )}
                </div>
            </section>
            </div>
          </div>
          <Loader type="pacman" />
        </>
      );

};

export default Projects;