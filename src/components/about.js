import React from 'react';
import myFace from '../assets/images/recent-me.jpeg'
import { Typography } from '@mui/material';
import { makeStyles } from "@material-ui/core";
import Typed from 'react-typed';

function About() {

  const useStyles = makeStyles(theme => ({
    title: {
      color: 'black',
      fontWeight: 'bolder'
    },
    subtitle: {
      color: 'black',
      marginBottom: '3rem',
      fontWeight: 'light'
    },
    typedContainer: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100vw',
      textAlign: 'center',
      zIndex: 1
    },
  }))

  const classes = useStyles();
  
  return (
    <>
      <h1 id="about" className='tab-text'>About me</h1>
      <section>
        <div className={classes.typedContainer}>
          <img className="my-face" src={myFace} alt='My face'></img>
          <h2 className={classes.title}>Jordan Rhys Escudero O'Grady</h2>

          <Typography className={classes.subtitle} variant='h4'>
            <Typed
              strings={['Full Stack Web Development', 'MERN Stack', 'JavaScript', 'HTML5', 'CSS3', 'GraphQL', 'MongoDB', 'MySQL', 'Mongoose', 'Sequalize', 'REST APIs', 'and MORE!!']}
              typeSpeed={40}
              backSpeed={60}
              loop />
          </Typography>
          <br/>
          <p id='about-me-text'>
            Full stack web developer with a Cert 3 in Business Operations and a background in sales. <br/>
            Learnt through the University of Sydney with a completetion date of 09/05/23. <br/>
            With main language being JavaScript. <br/>
            A strong believer of life long learning with a broad background of experience from construction to sales and business I have a strong skillset of communication and teamwork. <br/>
            I look forward to seeing what challenges you have for me!
          </p>
        </div>

      </section>
    </>
  );
}

export default About;