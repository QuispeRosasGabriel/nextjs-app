import {Campo, Formulario, InputSubmit, Error} from '../components/ui/Formulario';
import {css} from '@emotion/core';
import firebase from '../firebase';
import { useState } from 'react';
import Router from 'next/router';

// validaciones
import useValidation from '../hooks/useValidation';
import validateLogin from '../validators/validateLogin';
import Layout from '../components/layouts/Layout'; 

const STATE_INICIAL = {
  email: '',
  password: ''
}

const Login = () => {

  const {
    valores,
    errores,
    handleSubmit,
    handleChange,
    handleBlur
  } = useValidation(STATE_INICIAL, validateLogin, iniciarSesion);

  const { email, password } = valores; 
  const [successCreation, setSuccessCreation] = useState(false);
  const [errorCreation, setErrorCreation] = useState(false);

  function iniciarSesion () {
    console.log('iniciar sesion');
  }

  return (
    <div>
      <Layout>
        <h1
          css={css`
            text-align: center;
            margin-top: 5em;
            `
          }
        >Login</h1>

        <Formulario
          onSubmit={handleSubmit}
          noValidate
        >
          <Campo>
            <label htmlfor="email">
              email
            </label>
            <input 
              type="text" 
              id="email"
              placeholder="Escribe tu email..."
              name="email"
              value={email}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </Campo>
          {errores.email && <Error>{errores.email}</Error>}

          <Campo>
            <label htmlfor="nombre">
              Password
            </label>
            <input 
              type="password"
              id="password"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={password}
            />
          </Campo>
          {errores.password && <Error>{errores.password}</Error>}
        {errorCreation ? <Error>{errorCreation}</Error> : null} 
          <InputSubmit
            type="submit"
            value="Iniciar Sesión"
          />
        </Formulario>
        {successCreation && <p>Usuario creado exitosamente</p>}
      </Layout>
    </div>
  )
}

export default Login;