import React from 'react';
import logocontact from '../assets/logocontact.png';

const Contact = () => {
  return (
    <>
      <div className="contact" id="contact">
        <div className="container">
          <div className="row">
            <div className="col info">
              <p>
                <img src={logocontact} />
                La{' '}
                <a href="https://rickandmortyapi.com/" target="_blank">
                  API de Rick and Morty
                </a>{' '}
                es una API REST(ish) y GraphQL basada en el programa de
                televisión Rick and Morty. Fue creada por Axel Fuhrmann,
                desarrollador y Talita, la "científica de datos de Rick y
                Morty". <br />
                Esta API es de código abierto y utiliza una licencia BSD.
                <br /> Por mi parte, consulto esta API a manera de ejercicio
                como parte de mi crecimiento como desarrollador Frontend. Espero
                sea de su completo agrado.
              </p>
            </div>

            <div className="col medias">
              <h3>Contacto</h3>
              <p>
                ¿Estás buscando un diseñador web para tu próximo proyecto?
                ¡Conversemos! <br />
                <a href="#">emanuelcortezr@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">© 2022 Edicto Cortez</footer>
    </>
  );
};

export default Contact;
