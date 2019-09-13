import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Card from './Card';
import BG from '../sw-bg.jpg';

const Container = styled.div`
background-image: url(${BG});
// background:  #FF7F50;
margin: 2%;
display: flex;
flex-direction: column;
flex-wrap: wrap;
text-aligh: center;
`;

export default function Showcase(){
    const [people, setpeople] = useState([]);

    // const [name, setname] = useState('');
    // const [birth_year, setbirthYear] = useState('');
    // const [gender, setgender] = useState('');
    // const [height, setheight] = useState('');
    // const [mass, setmass] = useState('');
    // const [hair_color, sethairColor] = useState('');
    // const [skin_color, setskinColor] = useState('');
    // const [eye_color, seteyeColor] = useState('');
    // const [films, setfilms] = useState('0');
    

    useEffect(() => {
        axios.get('https://swapi.co/api/people/')
        .then( results =>{
            
            const char = results.data.results;
            console.log(char);
            setpeople(char);

            // setname(char.name);
            // setbirthYear(char.birth_year);
            // setgender(char.gender);
            // setheight(char.height);
            // setmass(char.mass);
            // sethairColor(char.hair_color);
            // setskinColor(char.skin_color);
            // seteyeColor(char.eye_color);
            // setfilms(char.films);
        })
        .catch(error =>{
            console.log('Error Found.', error);
        });
    }, []);


return (
    <Container>
        <h3>Lists Of People</h3>
        {people.map( (person, index) =>{
            return <Card 
                key={index}
                name={person.name}
                birth_year={person.birth_year}
                gender={person.gender}
                height={person.height}
                mass={person.mass}
                hair_color={person.hair_color}
                skin_color={person.skin_color}
                eye_color={person.eye_color}
                films={person.films.length}
            />;
        })} 
        
    </Container>

)//return function
}//close function
