export const obtenerProductos = async () => {
    const response = await fetch(
        '/data.json',
        {
            method: 'GET'
        }
    )
    return response.json()

    /* console.log('Datos productos',response) */


    /* console.log({response}) */
}

export default obtenerProductos