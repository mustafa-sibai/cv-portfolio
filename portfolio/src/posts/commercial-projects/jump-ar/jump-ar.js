import React from "react"

import Post from '../../../components/post'

import img  from './images/0.png'
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.png'
import img5 from './images/5.png'
import img6 from './images/6.png'
import img7 from './images/7.png'

const JumpAR = () => (
    <Post
        title={'Jump AR'}
        date={'March 2018 - May 2018'}

        youTubeVideo={'https://www.youtube.com/embed/ge6ZeYgfByI'}
        description={`Description: Jump AR is a 3D augmented reality game where you have to jump over blocks and try to reach the highest score possible without falling. You can unlock new characters and customize your existing character with new skins.

Technology: Unity 3D, ARKit, C#
        
Platforms: IOS`}

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
                url: 'https://apps.apple.com/us/app/jump-ar/id1362697261'
            }
        ]}
    />
)

export default JumpAR