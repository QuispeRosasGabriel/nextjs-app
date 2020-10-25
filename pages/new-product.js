import Layout from '../components/layouts/Layout';
import { Campo, Formulario, InputSubmit, Error } from '../components/ui/Formulario';
import { css } from '@emotion/core';
import firebase from '../firebase';
import { useState } from 'react';
import Router from 'next/router';

// validaciones
import useValidation from '../hooks/useValidation';
import validateCreateAccount from '../validators/validateCreateAccount';


const STATE_INICIAL = {
  nombre: '',
  empresa: '',
  imagen: '',
  url: '',
  description:''
}

const NewProduct = () => {

  const {
    valores,
    errores,
    handleSubmit,
    handleChange,
    handleBlur
  } = useValidation(STATE_INICIAL, validateCreateAccount, createAccount);

  const { nombre, empresa, imagen, url, description } = valores;
  const [successCreation, setSuccessCreation] = useState(false);
  const [errorCreation, setErrorCreation] = useState(false);

  async function createAccount() {
    
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
        >Nuevo Producto</h1>

        <Formulario
          onSubmit={handleSubmit}
          noValidate
        >
          <fieldset>
            <legend>Información General</legend>
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
            <label htmlfor="empresa">
              Empresa
            </label>
            <input 
              id="empresa"
              placeholder="Escribe el nombre de la empresa o compañia..."
              name="empresa"
              value={empresa}
              onChange={handleChange}
              onBlur={handleBlur}
              />
          </Campo>
          {errores.empresa && <Error>{errores.empresa}</Error>}
          <Campo>
            <label htmlfor="imagen">
              Imagen
            </label>
            <input 
              type="file"
              id="imagen" 
              name="imagen"
              value={imagen}
              onChange={handleChange}
              onBlur={handleBlur}
              />
          </Campo>
          {errores.imagen && <Error>{errores.imagen}</Error>}
          <Campo>
            <label htmlfor="url">
              Url
            </label>
            <input 
              type="url" 
              id="url"
              name="url"
              value={url}
              onChange={handleChange}
              onBlur={handleBlur}
              />
          </Campo>
          {errores.url && <Error>{errores.url}</Error>}
          </fieldset>
          <fieldset>
            <legend>Sobre tu producto</legend>
            <Campo>
            <label htmlfor="description">
              Descripción
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={handleChange}
              onBlur={handleBlur}
              />
          </Campo>
          {errores.description && <Error>{errores.description}</Error>}
          </fieldset>

          {errorCreation ? <Error>{errorCreation}</Error> : null}
          <InputSubmit
            type="submit"
            value="Crear Producto"
          />
        </Formulario>
        {successCreation && <p>Usuario creado exitosamente</p>}
      </Layout>
    </div>
  )
}

export default NewProduct;