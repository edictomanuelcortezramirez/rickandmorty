import React, { useEffect, useState } from 'react';
import { allCharacters } from '../Functions/Functions';
import Contact from './Contact';
import Navbar from './Navbar';
import serie from '../assets/serie.png';

const Characters = () => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    allCharacters(setCharacters);
  }, []);

  const handleChange = (e) => {
    if (e.target.value.length > 0) {
      const response = characters.filter((character) => {
        const str = character.name.toLowerCase();
        const regex = new RegExp(e.target.value.toLowerCase());
        return regex.test(str);
      });

      if (response.length > 0) {
        setCharacters(response);
      } else {
        setCharacters(null);
      }
    }
    if (e.target.value.length === 0) {
      allCharacters(setCharacters);
    }
  };

  const toggleFavorite = (char) => {
    let modifiedCharacters = characters.map((item) => {
      if (char === item.id) {
        return { ...item, heart: item.heart ? !item.heart : true };
      } else {
        return item;
      }
    });

    // console.log(modifiedCharacters);

    setCharacters(modifiedCharacters);
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            NOMBRE DEL PERSONAJE
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Ej: Rick"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="cards">
          {characters != null ? (
            characters.map((character) => (
              <div key={character.id}>
                <div className="grid">
                  <figure className="effect">
                    <img
                      src={character.image}
                      className="card-img-top"
                      alt="..."
                    />
                    <figcaption>
                      <h2>{character.name}</h2>
                      <p>
                        {character.species}
                        <span className="dash"> • </span>
                        {character.status}
                        <span className="dash"> • </span>
                        {character.gender}
                      </p>
                      <p>
                        Origin<span className="dash"> : </span>
                        {character.origin.name}
                      </p>
                      <p>
                        Now in<span className="dash"> : </span>
                        {character.location.name}
                      </p>
                      {/* <a href="#">View more</a> */}
                      <p className="heart">
                        <a
                          onClick={() => {
                            toggleFavorite(character.id);
                          }}
                          className={
                            'empty ' + (character.heart ? 'full' : ' ')
                          }
                        >
                          {character.heart === true ? (
                            <ion-icon name="heart"></ion-icon>
                          ) : (
                            <ion-icon name="heart-outline"></ion-icon>
                          )}
                        </a>
                      </p>
                    </figcaption>
                  </figure>
                </div>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', margin: '30px 0 30px 0' }}>
              <img src={serie} alt="..." style={{ width: '80%' }} />
              <h2 style={{ color: 'grey' }}>
                No hay personajes con el texto ingresado
              </h2>
            </div>
          )}
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Characters;
