import styled from 'styled-components';

export const ButtonElement = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 9px;
    background: #0899ba;
    padding: 10px 20px;
    margin: 10px;
    color: white;
    border: none;
    width: 80%;
    margin: 10px;
    font-size: 1.2rem;

    &:hover {
        cursor: pointer;
        background: #00b2ca;
        transition: 0.5s;
    }
`;