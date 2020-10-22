import Layout from '../components/layouts/Layout';
import {Campo, Formulario, InputSubmit} from '../components/ui/Formulario';
import {css} from '@emotion/core';

export default function CreateAccount() {
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

        <Formulario>
          <Campo>
            <label htmlfor="nombre">
              Nombre
            </label>
            <input type="text" id="nombre"
              placeholder="Escribe tu nombre..."
              name="nombre"
            />
          </Campo>
          <Campo>
            <label htmlfor="email">
              email
            </label>
            <input type="text" id="email"
              placeholder="Escribe tu email..."
              name="email"
            />
          </Campo>
          <Campo>
            <label htmlfor="nombre">
              Password
            </label>
            <input type="password" id="password"
              name="password"
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
