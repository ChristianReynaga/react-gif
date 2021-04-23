import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
export const GifGrid = ({ category }) => {

    // const [gifs, setGifs] = useState([]);

    const { data:gifs, loading } = useFetchGifs( category );


    // useEffect(() => {
    //     getGifs( category )
    //         .then( setGifs );
    // }, [ category ]);  //si la categoria cambia entonces se dispara el useEffect pero en este caso no se usara nunca    
    

    // getGifs();

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            {/* { loading ? 'Cargando' : 'Data cargada' } */}
            {/* { loading ? <p>Loading</p> : null } */}
            { loading && <p className="animate__animated animate__flash">Loading</p> }

            <div className="card-grid">

                {
                    gifs.map((img) =>
                        <GifGridItem
                            key={img.id}
                            // title={ title } 
                            // url={ url } 
                            {...img}
                        />
                    )
                }
            </div>
        </>
    )
}
