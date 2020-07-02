import React from "react"

import Post from '../../../components/post'

import img from './images/0.png'
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.jpg'
import img4 from './images/4.png'
import img5 from './images/5.png'
import img6 from './images/6.png'
import img7 from './images/7.png'
import img8 from './images/8.png'
import img9 from './images/9.png'

const TheExiled = () => (
    <Post
        title={'The Exiled'}
        date={'April 2015 - March 2016'}

        youTubeVideo={'https://www.youtube.com/embed/yDN0YaS2bd0'}
        description={`Description: The Exiled is 2D pixel art procedurally generated dungeon game built in C++ on top of my Vault-Tech engine.

Technology: Vault-Tech engine, C++
        
Platforms: Windows, Linux`}

        slideImages={[
            img,
            img1,
            img2,
            img3,
            img4,
            img5,
            img6,
            img7,
            img8,
            img9
        ]}
    />
)

export default TheExiled