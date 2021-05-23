import React from 'react';
import { ButtonElement } from '../../PageStyles/Button';
import { CardLayout, Cards } from '../../PageStyles/Cards';
import { Heading } from '../../PageStyles/Heading';


const BtnMain = () => {
    return (
        <Cards>
            <Heading>Buttons</Heading>
            <CardLayout>
                <div>ButtonOne</div>
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

export default BtnMain;
