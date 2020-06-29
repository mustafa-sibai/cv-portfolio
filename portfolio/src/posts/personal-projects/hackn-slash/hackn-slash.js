import React from "react"

import Post from '../../../components/post'

import img  from './images/0.png'
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.png'

const HacknSlash = () => (
    <Post
        title={'Hack’n Slash'}
        date={'April 2015 – May 2015'}

        youTubeVideo={'https://www.youtube.com/embed/jIHXAk4zAZI'}
        description={`Description: Hack’n Slash is a procedrually generated dungeon crawller game where you fight skelletons. This game was my first try at procedural generation.

Technology: Vault-Tech, XNA, C#
        
Platforms: Windows`}

        slideImages={[
            img,
            img1,
            img2,
            img3,
            img4
        ]}
    />
)

export default HacknSlash