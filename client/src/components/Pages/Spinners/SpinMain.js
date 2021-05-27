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

const SpinMain = () => {
    return (
        <Cards>
            <Heading>Spinners</Heading>
            <CardLayout>
                <One />
                <ButtonElement><a href="https://codepen.io/hello_SD/pen/PopKNaQ" target="_blank" style={{ textDecoration: "none", color: "white" }}>Code</a></ButtonElement>
            </CardLayout>
            <CardLayout>
                <Two />
                <ButtonElement><a href="https://codepen.io/hello_SD/pen/BaWdKPV" target="_blank" style={{ textDecoration: "none", color: "white" }}>Code</a></ButtonElement>
            </CardLayout>
            <CardLayout>
                <Three />
                <ButtonElement><a href="https://codepen.io/hello_SD/pen/XWMadxJ" target="_blank" style={{ textDecoration: "none", color: "white" }}>Code</a></ButtonElement>
            </CardLayout>
            <CardLayout>
                <Four />
                <ButtonElement><a href="https://codepen.io/hello_SD/pen/abJyNPN" target="_blank" style={{ textDecoration: "none", color: "white" }}>Code</a></ButtonElement>
            </CardLayout>
            <CardLayout>
                <Five />
                <ButtonElement><a href="https://codepen.io/hello_SD/pen/YzZxqMr" target="_blank" style={{ textDecoration: "none", color: "white" }}>Code</a></ButtonElement>
            </CardLayout>
            <CardLayout>
                <Six />
                <ButtonElement><a href="https://codepen.io/hello_SD/pen/LYWjNwy" target="_blank" style={{ textDecoration: "none", color: "white" }}>Code</a></ButtonElement>
            </CardLayout>
        </Cards>
    )
}

export default SpinMain;
