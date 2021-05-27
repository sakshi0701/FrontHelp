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

const BadgeMain = () => {
    return (
        <Cards>
        <Heading>Badges</Heading>
        <CardLayout>
            <One />
            <ButtonElement><a href="https://codepen.io/hello_SD/pen/GRWvdrK" style={{textDecoration:"none",color:"white"}} target="_blank">Code</a></ButtonElement>
        </CardLayout>
        <CardLayout>
            <Two />
            <ButtonElement><a href="https://codepen.io/hello_SD/pen/yLMojXo" style={{textDecoration:"none",color:"white"}} target="_blank">Code</a></ButtonElement>
        </CardLayout>
        <CardLayout>
            <Three />
            <ButtonElement><a href="https://codepen.io/hello_SD/pen/abJyGLa" style={{textDecoration:"none",color:"white"}} target="_blank">Code</a></ButtonElement>
        </CardLayout>
        <CardLayout>
            <Four />
            <ButtonElement><a href="https://codepen.io/hello_SD/pen/NWpvMYd" style={{textDecoration:"none",color:"white"}} target="_blank">Code</a></ButtonElement>
        </CardLayout>
        <CardLayout>
            <Five />
            <ButtonElement><a href="https://codepen.io/hello_SD/pen/ZEeJojx" style={{textDecoration:"none",color:"white"}} target="_blank">Code</a></ButtonElement>
        </CardLayout>
        <CardLayout>
            <Six />
            <ButtonElement><a href="https://codepen.io/hello_SD/pen/XWMaqOx" style={{textDecoration:"none",color:"white"}} target="_blank">Code</a></ButtonElement>
        </CardLayout>
    </Cards>
    )
}

export default BadgeMain;