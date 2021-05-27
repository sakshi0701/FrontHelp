import React from 'react';
import { ButtonElement } from '../../PageStyles/Button';
import { CardLayout, Cards } from '../../PageStyles/Cards';
import { Heading } from '../../PageStyles/Heading';

import One from './Displays/One/One';
import Two from './Displays/Two/Two';
import Three from './Displays/Three/Three';
import Four from './Displays/Four/Four';
import Five from './Displays/Five/Five';
import Six from './Displays/Six/Six';

const CardsMain = () => {
    return (
        <Cards>
            <Heading>Cards</Heading>
            <CardLayout>
                <One />
                <ButtonElement><a target="_blank" style={{ textDecoration: "none", color: "white" }} href="https://codepen.io/hello_SD/pen/PopKzwd" >Code</a></ButtonElement>
            </CardLayout>
            <CardLayout>
                <Two />
                <ButtonElement><a target="_blank" style={{ textDecoration: "none", color: "white" }} href="https://codepen.io/hello_SD/pen/rNyzLWL" >Code</a></ButtonElement>
            </CardLayout>
            <CardLayout>
                <Three />
                <ButtonElement><a target="_blank" style={{ textDecoration: "none", color: "white" }} href="https://codepen.io/hello_SD/pen/yLMoJMY" >Code</a></ButtonElement>
            </CardLayout>
            <CardLayout>
                <Four />
                <ButtonElement><a target="_blank" style={{ textDecoration: "none", color: "white" }} href="https://codepen.io/hello_SD/pen/mdWMEmG" >Code</a></ButtonElement>
            </CardLayout>
            <CardLayout>
                <Five />
                <ButtonElement><a target="_blank" style={{ textDecoration: "none", color: "white" }} href="https://codepen.io/hello_SD/pen/LYWjZje" >Code</a></ButtonElement>
            </CardLayout>
            <CardLayout>
                <Six />
                <ButtonElement><a target="_blank" style={{ textDecoration: "none", color: "white" }} href="https://codepen.io/hello_SD/pen/OJpjXOG" >Code</a></ButtonElement>
            </CardLayout>
        </Cards>
    )
}

export default CardsMain;
