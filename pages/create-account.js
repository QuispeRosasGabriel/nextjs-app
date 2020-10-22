import Layout from '../components/layouts/Layout';

export default function CreateAccount() {
  return (
    <div>
      <Layout>
        <h1>Crear Cuenta</h1>

        <form>
          <div>
            <label htmlfor="nombre">
              Nombre
            </label>
            <input type="text" id="nombre"
              placeholder="Escribe tu nombre..."
              name="nombre"
            />
          </div>
          <div>
            <label htmlfor="email">
              email
            </label>
            <input type="text" id="email"
              placeholder="Escribe tu email..."
              name="email"
            />
          </div>
          <div>
            <label htmlfor="nombre">
              Password
            </label>
            <input type="password" id="password"
              name="password"
            />
          </div>
          <input
            type="submit"
            value="Crear Cuenta"
          />
        </form>
      </Layout>
    </div>
  )
}
