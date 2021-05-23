import React from 'react';
import { ButtonElement } from '../../PageStyles/Button';
import { CardLayout, Cards } from '../../PageStyles/Cards';
import { Heading } from '../../PageStyles/Heading';

const SpinMain = () => {
    return (
        <Cards>
            <Heading>Spinners</Heading>
            <CardLayout>
                <div>Spinners One</div>
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

export default SpinMain;
