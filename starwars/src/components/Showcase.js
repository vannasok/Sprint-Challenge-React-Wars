import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Card from './Card';

const Container = styled.div`
background: #e1c4a7;
margin: 2%;
`;

const [name, setname] = useState('');
const [birth_year, setbirthYear] = useState('');
const [gender, setgender] = useState('');
const [height, setheight] = useState('');
const [mass, setmass] = useState('');
const [hair_color, sethairColor] = useState('');
const [skin_color, setskinColor] = useState('');
const [eye_color, seteyeColor] = useState('');
const [films, setfilms] = useState('0');

// const [people, setpeople] = useState([]);

export default function Showcase(){
    const [people, setpeople] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.co/api/people/')
        .then( results =>{
            const people = results.data.results;
            console.log(people);
            setpeople(people);

            setname(people.name);
            setbirthYear(people.birth_year);
            setgender(people.gender);
            setheight(people.height);
            setmass(people.mass);
            sethairColor(people.hair_color);
            setskinColor(people.skin_color);
            seteyeColor(people.eye_color);
            setfilms(people.films.length);
        })
        .catch(error =>{
            console.log('Error Found.', error);
        });
    }, []);


return (
    <Container>
        <h3>Lists Of People</h3>
        {people.map( person =>{
            return <Card 
                name={name}
                birth_year={birth_year}
                gender={gender}
                height={height}
                mass={mass}
                hair_color={hair_color}
                skin_color={skin_color}
                eye_color={eye_color}
                films={films}
            />;
        })} 
    </Container>

)//return function
}//close function
