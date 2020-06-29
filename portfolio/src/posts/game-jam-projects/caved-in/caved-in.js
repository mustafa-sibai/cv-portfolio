import React from "react"

import Post from '../../../components/post'

import img  from './images/0.png'
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.png'

const CavedIn
= () => (
    <Post
        title={'Caved In'}
        date={'January 2017'}
        
        youTubeVideo={'https://www.youtube.com/embed/L6hpVCI4RF0'}
        description={`Description: Upon waking up in the aftermath of a disaster that befell this underground mine, you are given the chance to listen to a voice on a radio to help you out of this subterranean maze. How far will you go to trust someone else for your freedom?

Technology: Unity 3D, C#
        
Platforms: Windows`}

        slideImages={[
            img,
            img1,
            img2,
            img3,
            img4
        ]}

        links={[
            {
                name: 'Global Game Jam',
                url: 'https://globalgamejam.org/2017/games/caved'
            }
        ]}
    />
)

export default CavedIn