import React from "react"

import Post from '../../../components/post'

import img  from './images/0.png'
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.png'
import img5 from './images/5.png'

const PounceHug = () => (
    <Post
        title={'Pounce Hug!'}
        date={'January 2019'}

        youTubeVideo={'https://www.youtube.com/embed/QfPXkLiRwOY'}
        description={`Description: Pounce Hug is a singleplayer 3D game where you go around and hug as many people as possible without their consent before the timer ends.

Technology: Unity 3D, C#
        
Platforms: Windows`}

        slideImages={[
            img,
            img1,
            img2,
            img3,
            img4,
            img5
        ]}

        links={[
            {
                name: 'Global Game Jam',
                url: 'https://globalgamejam.org/2019/games/pounce-hug'
            }
        ]}
    />
)

export default PounceHug