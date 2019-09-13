import React from 'react';
import styled from 'styled-components';


const CardContainer = styled.div`
background: #D3D3D3;
padding: 2px;

`;

const CardStyle = styled.div`
background: white;
color: black;

`;

const ButtonStyle = styled.button`
color: #cc5f2a;
background: white;
padding: 10px 20px;
border-radius: 20%;
`;

const Card = props =>{

    return (
        <CardContainer>
            <CardStyle>
                <p><b>Name:</b> {props.name}</p>
                <p><b>Birth Year: </b> {props.birth_year}</p>
                {/* <p><b>Appearance: </b>Height: {props.height}</p>
                <p styled='padding-left: '></p> */}
                <pre>
                    <b>Appearance: </b> Gender: {props.gender}.
                                        Height: {props.height}.
                                        Mass: {props.mass}.
                                        Hair Color: {props.hair_color}.
                                        Skin Color: {props.skin_color}.
                                        Eye color: {props.eye_color}.
                </pre>
                <p><b>Films: {props.films.length}</b></p>
            </CardStyle>
            <ButtonStyle>View More</ButtonStyle>
        </CardContainer>
        
    );
}

export default Card;