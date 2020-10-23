import React, { useState } from 'react'

const useValidation = (initialState, validar, fn) => {
    
    const [valores, setValores] = useState(initialState);
    const [errores, setErrores] = useState({});
    const [submitForm, setSubmitForm] = useState(false);

    useEffect(() => {
        if(submitForm) {
            const noErrors = Object.keys(errores).length === 0;
            if(noErrors) {
                fn(); // funcion que se ejecuta en el componente
            }
            setSubmitForm(false);
        }
        return () => {
        }
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default useValidation
