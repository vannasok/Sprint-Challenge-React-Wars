import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
background: white;
color: black;
border-radius: 5px;
margin: 5px;
padding: 5px;

`;

const ButtonStyle = styled.button`
color: #cc5f2a;
background: white;
padding: 10px 20px;
border-radius: 50px;
&:hover{
    color: white;
background: #cc5f2a;
margin: 5px;
}
`;

const Card = props =>{

    return (
        <div>
            <CardStyle key={props.id}>
                <p><b>Name:</b> {props.name}</p>
                <p><b>Birth Year: </b> {props.birth_year}</p>
                {/* <p><b>Appearance: </b>Height: {props.height}</p>
                <p styled='padding-left: '></p> */}
                <p>
                    <b>Appearance: </b> Gender: {props.gender}.
                                        Height: {props.height}.
                                        Mass: {props.mass}.
                                        Hair Color: {props.hair_color}.
                                        Skin Color: {props.skin_color}.
                                        Eye color: {props.eye_color}.
                </p>
                <p><b>Films: {props.films}</b></p>
                <ButtonStyle>View More</ButtonStyle>
            </CardStyle>
        </div>
            
        
        
    );
}

export default Card;