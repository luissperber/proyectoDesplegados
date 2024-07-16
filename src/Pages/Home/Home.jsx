import React, { useEffect, useState } from 'react'
import { Navbar } from '../../Components'
import { Link } from 'react-router-dom'
/* import { lista_productos } from '../../data' */
import { BiAngry, BiBaseball } from "react-icons/bi";
import { FiAlertTriangle } from "react-icons/fi";
import { obtenerProductos } from '../../Fetching/products.fetching';








const Home = () => {

    


/*     setTimeout(
        () => {
            console.log('hola')
        },
        2000
    ) */

    useEffect(

        () => {



            setTimeout(
                () => {
                    obtenerProductos()
                    .then(
                        (productos) => {
                            console.log('Datos productos',productos)
                            if(searchString){
                                setListaProductos(productos.filter(productos => producto.titulo.toLowerCase().includes(searchString.toLowerCase)))
                            }
                            setListaProductos(productos)
                            setIsLoading(false)
                        }
                    )   
                },
                2000
            )

   

        },
        [searchString]
    )


    const [lista_productos, setListaProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchString, setSearchString] = useState('')

    const handleChangeValue = (e) => {
        console.log(e.target.value)
        setSearchString(e.target.value)
    }

    
    return (
        <div>
            <Navbar/>
            <h1>Lista de productos</h1>
            <input placeholder='buscar un producto' onChange={handleChangeValue} value={searchString}/>
            <div>
                {

                    isLoading
                    ? <h2>Cargando...</h2>
                    :lista_productos.map(producto => {
                        return (
                            <div key={producto.id}>
                                <h2>{producto.titulo}</h2>
                                <span>Precio: ${producto.precio}</span>
                                <Link to={'/detalle/' + producto.id}>Ver detalle <BiAngry /></Link>
                                <hr />
                            </div>
                        )
                    })

                }


            </div>
        </div>
    )
}

export default Home