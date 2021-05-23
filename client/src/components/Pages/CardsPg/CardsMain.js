import React from 'react';
import { ButtonElement } from '../../PageStyles/Button';
import { CardLayout, Cards } from '../../PageStyles/Cards';
import { Heading } from '../../PageStyles/Heading';

const CardsMain = () => {
    return (
        <Cards>
            <Heading>Cards</Heading>
            <CardLayout>
                <div>CardOne</div>
                <ButtonElement>Code</ButtonElement>
            </CardLayout>
            <CardLayout>
                <div>Image</div>
                <ButtonElement>Code</ButtonElement>
            </CardLayout>
            <CardLayout>
                <div>Image</div>
                <ButtonElement>Code</ButtonElement>
            </CardLayout>
            <CardLayout>
                <div>Image</div>
                <ButtonElement>Code</ButtonElement>
            </CardLayout>
            <CardLayout>
                <div>Image</div>
                <ButtonElement>Code</ButtonElement>
            </CardLayout>
            <CardLayout>
                <div>Image</div>
                <ButtonElement>Code</ButtonElement>
            </CardLayout>
        </Cards>
    )
}

export default CardsMain;
