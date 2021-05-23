import styled from 'styled-components';

export const FormLayout = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    background: white;
    height: 70vh;
    width: 55vh;
    border-radius: 9px;
`;

export const FormTitle = styled.h2`
    text-align: center;
    font-size: 2rem;
    font-family: 'Farro', sans-serif;
`;

export const FormInput = styled.input`
    padding: 5px;
    margin: 5px;
    border: none;
    border-bottom: 0.5px solid grey;
    font-size: 1rem;
    font-family: 'Farro', sans-serif;
`;