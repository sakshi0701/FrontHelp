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

const BtnMain = () => {
    return (
        <Cards>
            <Heading>Buttons</Heading>
            <CardLayout>
                <One />
                <ButtonElement><a style={{textDecoration:"none", color:"#fff"}} target="_blank" href="https://codepen.io/hello_SD/pen/yLMbBrJ">Code</a></ButtonElement>
            </CardLayout>
            <CardLayout>
                <Two />
                <ButtonElement><a style={{textDecoration:"none", color:"#fff"}} target="_blank" href="https://codepen.io/hello_SD/pen/ZEeKEOy">Code</a></ButtonElement>
            </CardLayout>
            <CardLayout>
                <Three />
                <ButtonElement><a style={{textDecoration:"none", color:"#fff"}} target="_blank" href="https://codepen.io/hello_SD/pen/OJpmJWJ">Code</a></ButtonElement>
            </CardLayout>
            <CardLayout>
                <Four />
                <ButtonElement><a style={{textDecoration:"none", color:"#fff"}} target="_blank" href="https://codepen.io/hello_SD/pen/abJWbWG">Code</a></ButtonElement>
            </CardLayout>
            <CardLayout>
                <Five />
                <ButtonElement><a style={{textDecoration:"none", color:"#fff"}} target="_blank" href="https://codepen.io/hello_SD/pen/zYZwYPj">Code</a></ButtonElement>
            </CardLayout>
            <CardLayout>
                <Six />
                <ButtonElement><a style={{textDecoration:"none", color:"#fff"}} target="_blank" href="https://codepen.io/hello_SD/pen/xxqdxYa">Code</a></ButtonElement>
            </CardLayout>
        </Cards>
    )
}

export default BtnMain;
