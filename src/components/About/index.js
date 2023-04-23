import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import TagCloud from 'TagCloud';
import './index.scss';

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);
  }, []);

  useEffect(() => {
    const container = '.tagcloud';
    const texts = [
        "HTML",
        "CSS",
        "JavaScript",
        "MongoDB",
        "Mongoose",
        "SQL",
        "Sequalize",
        "Heroku",
        "GitHub",
        "Bash",
        "Insomnia", 
        "GraphQL",
        "Nodejs",
        "Reactjs",
        "MERN Stack",
        "Webpacks",
        "Express",
        "REST APIs",
        "Apollo Sandbox",
        "Compass",
        "NoSQL",
        "JQuery",
        "Handlebars",
        "Bootstrap",
        "Ghant charts",
    ];

    const options = {
      radius: 300 ,
      maxSpeed: 'normal',
      initSpeed: 'normal',
      keep: true,
    };

    TagCloud(container, texts, options);
  }, []);
  
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am a creative, hardworking individual with broad industry experience in construction, sales, and business, <br/>
            but I've found my true passion in pivoting into tech through full-stack software development.
          </p>
          <p align="LEFT">
            Through my studies, I have discovered that I'm a problem solver who enjoys the challenge of figuring things out. <br/>
            Lifelong learning is important to me, and I am constantly looking for opportunities to improve my skills and knowledge.
          </p>
          <p>
            I welcome constructive criticism as a way to grow and develop my abilities. Moving forward, I'm excited to continue learning and contributing to the tech community.
          </p>
        </div>
        <div className="text-sphere">
          <span className="tagcloud"></span>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;