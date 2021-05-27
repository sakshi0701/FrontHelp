import React from 'react';
import './six.css';

const Six = () => {
    return (
        <div className="six">
            <div class="infocardContainer">
                <div id="main">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Dog_coat_variation.png" />
                </div>
                <div id="textbois">
                    <h2>Name</h2>
                    <h4>Organization</h4>
                    <a href="mailto:limecicila@gmail.com">email@example.com</a>
                    <div id="hotlinks">
                        <a href="https://codepen.io/LIMESTA"><img id="codepenio" src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png" target="_blank"></img>
                        </a>
                        <a href="https://codepen.io/LIMESTA">
                            <img id="codepenio" src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png" target="_blank"></img>
                        </a>
                        <a href="https://codepen.io/LIMESTA">
                            <img id="codepenio" src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png" target="_blank"></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Six;