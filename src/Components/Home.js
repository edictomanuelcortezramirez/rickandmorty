import React from 'react';
import { useNavigate } from 'react-router-dom';
import ship from '../assets/ship.png';
import Navbar from './Navbar';
import portgun from '../assets/portgun.png';
import Contact from './Contact';

const Home = () => {
  const navigate = useNavigate();
  const navigateCharacters = () => {
    navigate('/characters');
  };
  const navigateEpisodes = () => {
    navigate('/episodes');
  };
  return (
    <div>
      <Navbar />
      <div className="home" id="#home">
        <div className="container">
          <img src={ship} />
          <ul className="menu">
            <a href="#" onClick={navigateCharacters}>
              <li className="icon brand">
                <span className="tooltip">
                  <img src={portgun} />
                </span>
                <span>PERSONAJES</span>
              </li>
            </a>
            <a href="#" onClick={navigateEpisodes}>
              <li className="icon brand">
                <span className="tooltip">
                  <img src={portgun} />
                </span>
                <span>EPISODIOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {` `}</span>
              </li>
            </a>
          </ul>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Home;
