import React from "react"

import Post from '../../../components/post'

import img from  './images/0.png'
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.png'
import img5 from './images/5.png'
import img6 from './images/6.png'
import img7 from './images/7.png'

const Crossbow = () => (
    <Post
        title={'Crossbow'}
        date={'May 2018 - July 2018'}
        
        youTubeVideo={'https://www.youtube.com/embed/oBKoz655tEQ'}
        description={`Description: Crossbow is a fun 2D game where you have to break as many targets as possible and get the highest score.

Technology: Unity 3D, C#
        
Platforms: IOS, Android`}

        slideImages={[
            img,
            img1,
            img2,
            img3,
            img4,
            img5,
            img6,
            img7
        ]}

        links={[
            {
                name: 'Apple Store',
                url: 'https://apps.apple.com/us/app/crossbow/id1367355715'
            }
        ]}
    />
)

export default Crossbow