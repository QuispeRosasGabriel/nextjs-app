import Layout from '../components/layouts/Layout';
import {Campo, Formulario, InputSubmit, Error} from '../components/ui/Formulario';
import {css} from '@emotion/core';

// validaciones
import useValidation from '../hooks/useValidation';
import validateCreateAccount from '../validators/validateCreateAccount';

const STATE_INICIAL = {
  nombre: '',
  email: '',
  password: ''
}

const CreateAccount = () => {

  const {
    valores,
    errores,
    handleSubmit,
    handleChange,
    handleBlur
  } = useValidation(STATE_INICIAL, validateCreateAccount, createAccount);

  const { nombre, email, password } = valores; 

  function createAccount () {
    console.log('creando cuenta');
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
        >Crear Cuenta</h1>

        <Formulario
          onSubmit={handleSubmit}
          noValidate
        >
          <Campo>
            <label htmlfor="nombre">
              Nombre
            </label>
            <input 
              type="text" 
              id="nombre"
              placeholder="Escribe tu nombre..."
              name="nombre"
              value={nombre}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Campo>
          {errores.nombre && <Error>{errores.nombre}</Error>}
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

          <InputSubmit
            type="submit"
            value="Crear Cuenta"
          />
        </Formulario>
      </Layout>
    </div>
  )
}

export default CreateAccount;