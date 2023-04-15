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
            I am a creative, hardworking problem solver with broad industry experience in 
            construction, sales and business. I have found my passion studying full-stack software development and I am 
            excited for the direction that I am pivoting to in tech and am motivated to learn what I can.
          </p>
          <p align="LEFT">
            I'm quiet curious and proud that if I dont know something I know how to figure it out. <br/>
            As strong believer in lifelong learning every challenge is new oppotunity to further expand my skillset and knowledge!
          </p>
          <p>
            As a results driven person I thrive off constructive critisims so I'm also looking on how i can further improve on my skillset
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