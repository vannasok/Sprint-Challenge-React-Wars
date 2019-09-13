import React, {useEffect} from 'react';
import axios from 'axios';

export default function Showcase(){

    useEffect(() => {
        axios.get('https://swapi.co/api/people/')
        .then( results =>{
            const people = results.data.results;
            console.log(people);
        })
        .catch(error =>{
            console.log('Error Found.', error);
        });
    }, []);


return (
    <div className='container'>
        <h3>Show here</h3>
    </div>

)//return function
}//close function