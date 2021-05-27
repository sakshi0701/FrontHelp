import React from 'react';
import './three.css';

const Three = () => {
    return (
        <div className="three">
            <div class="container">
                <div class="card">
                    <img src="https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no" alt="Person" class="card__image" />
                    <p class="card__name">Name</p>
                    <div class="grid-container">

                        <div class="grid-child-posts">
                            No. of Posts
                            </div>

                        <div class="grid-child-followers">
                            No. of Likes
                            </div>

                    </div>
                    <ul class="social-icons">
                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i class="fa fa-codepen"></i></a></li>
                    </ul>
                    <button class="btn draw-border">Follow</button>
                    <button class="btn draw-border">Message</button>

                </div>
            </div>
        </div>
    )
}

export default Three;