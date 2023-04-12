import './App.css';
import { React, useState } from 'react'
import Navigation from './components/navigation';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';
import About from './components/about'
import Resume from './components/resume';

function App() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />
    }

    if (currentPage === "Contact") {
      return <Contact />
    }

    if (currentPage === "Portfolio") {
      return <Portfolio />
    }

    if (currentPage === "Resume") {
      return <Resume />
    }
  }

  return (

      <div className='flex-wrapper'>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        <div>{renderPage(currentPage)}</div>
        <Footer></Footer>
      </div>
  );
}

export default App;