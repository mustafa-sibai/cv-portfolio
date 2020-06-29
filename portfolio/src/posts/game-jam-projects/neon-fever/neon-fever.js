import React from "react"

import Post from '../../../components/post'

import img  from './images/0.png'
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'

const NeonFever
= () => (
    <Post
        title={'Neon Fever'}
        date={'January 2018'}
        
        youTubeVideo={'https://www.youtube.com/embed/_a8FqicRwbI'}
        description={`Description: Set in a neon retro-vibe city, one bird has the chance to transmit any bird with a virus known as ‘The Dancing Flu’. Thus, anyone transmitted by the flu will start to dance uncontrollably, although there are some birds that will try to stop your epidemic. With a dart gun and one life, will you make the entire area populated with dancing birds?

Technology: Unity 3D, C#
        
Platforms: Windows`}

        slideImages={[
            img,
            img1,
            img2,
            img3
        ]}

        links={[
            {
                name: 'Global Game Jam',
                url: 'https://globalgamejam.org/2018/games/neon-fever-game'
            }
        ]}
    />
)

export default NeonFever