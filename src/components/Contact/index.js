import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const [email, setEmail] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const [message, setMessage] = useState("");

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const isValidEmail = (email) => {
        const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        return regex.test(email);
    };

    const handleButtonClick = () => {
        if (isValidEmail(email)) {
          const subject = encodeURIComponent(form.current.elements.subject.value);
          const emailBody = encodeURIComponent(message);
          window.location.href = "mailto:jord_ogrady@hotmail.com?subject=" + subject + "&body=" + emailBody;
        } else {
          alert("Please enter a valid email address.");
        }
    };

    

    return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in front-end, back-end and fullstack development opportunities. However, if you have other question,
            don't hesitate to contact me using the below form.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={handleButtonClick}>
              <ul>
                <li className="half">
                  <input 
                    placeholder="Name" 
                    type="text" 
                    name="name" 
                    required 
                  />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                    onChange={handleEmailChange}
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                    onChange={handleMessageChange}
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact