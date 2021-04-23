import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = [ 'One Punch', 'Naruto', 'Dragon Ball'];

    const [categories, setCategories] = useState(['Simpson']);

    // const handleAdd = () => {
        // const newCategories = categories.slice();
        // newCategories.push('Bleach');
        // setCategories(newCategories);
        // setCategories( [...categories, 'Bleach'] );
        // setCategories( (valueStateAnterior) => [...valueStateAnterior, 'Bleach']);
    // }



    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>

            <hr />

            {/* <button onClick={ handleAdd }>Agregar</button> */}
           <ol>
            { 
                categories.map( category => {
                    // return <li key={ category }>{ category }</li>
                    return <GifGrid 
                            key={ category }
                            category={ category } 
                            />
                })
            }
           </ol>
        </>
    );
}

export default GifExpertApp;