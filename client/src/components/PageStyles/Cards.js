import styled from 'styled-components';

export const Cards = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 40px 40px 40px 90px;
    border: 2px solid green;
    width: 100%;
    padding: 20px;
`;

export const CardLayout = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    background: #212529;
    border-radius: 9px;
    min-height: 45vh;
    min-width: 40vh;
    color: #fff;
    padding: 20px;
    margin: 20px;

    &:hover {
        cursor: pointer;
        min-height: 46vh;
        min-width: 41vh;
        transition: 0.3s;
    }
`;