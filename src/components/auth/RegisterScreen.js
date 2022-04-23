import React, { useRef } from 'react';

export const RegisterScreen = () => {
  const inputIMG = useRef();

  const handleIMG = () => {
    inputIMG.current.click();
  };

  return (
    <div className="register">
      <div className="register__grid container">
        <form className="form">
          <h3 className="form__heading">Registrate Ahora</h3>
          <hr />

          <div className="form__img" onClick={handleIMG}>
            <i class="fa-solid fa-camera"></i>
          </div>

          <div className="form__group form__hide">
            <input className="form__input form__input" ref={inputIMG} type="file" />
          </div>

          <div className="form__group">
            <label className="form__label" htmlFor="number">
              N° Tarjeta:
            </label>
            <input className="form__input" type="text" id="number" />
          </div>

          <div className="form__group">
            <label className="form__label" htmlFor="name">
              Nombre Completo:
            </label>
            <input className="form__input" type="text" id="name" />
          </div>

          <div className="form__group">
            <label className="form__label" htmlFor="email">
              Email:
            </label>
            <input className="form__input" type="text" id="email" />
          </div>

          <div className="form__group">
            <label className="form__label" htmlFor="password">
              Password:
            </label>
            <input className="form__input" type="password" id="password" />
          </div>

          <button className="form__button">Registrarme</button>
        </form>

        <div className="register__card">
          <h2>IMTERVAMK</h2>
          <img src="../assets/auth/card.png" alt="img" />
        </div>
      </div>

      <div className="copyright">
        <p>Copyright</p>
        <p>IMTERVAMK</p>
      </div>
    </div>
  );
};
