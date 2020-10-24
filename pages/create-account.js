import Layout from '../components/layouts/Layout';
import {Campo, Formulario, InputSubmit} from '../components/ui/Formulario';
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
    submitForm,
    handleSubmit,
    handleChange
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
              type="text" id="nombre"
              placeholder="Escribe tu nombre..."
              name="nombre"
              onChange={handleChange}
            />
          </Campo>
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
              onChange={handleChange}
            />
          </Campo>
          <Campo>
            <label htmlfor="nombre">
              Password
            </label>
            <input 
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              value={password}
            />
          </Campo>
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