import React from "react"

import Post from '../../../components/post'

import img from './images/0.png'
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.png'
import img5 from './images/5.png'
import img6 from './images/6.png'

const RiverRun = () => (
    <Post
        title={'River Run'}
        date={'July 2018 - August 2018'}

        youTubeVideo={'https://www.youtube.com/embed/D45tIxns4NE'}
        description={`Description: River run is a singleplayer endless runner game where you have to avoid obstacles and collect as many coins as possible.

The game has multiple levels and an online scoreboard. The game has power-ups and multiple boats to pick from.

Technology: Unity 3D, C#

Platforms: IOS, Android`}
        slideImages={[
            img,
            img1,
            img2,
            img3,
            img4,
            img5,
            img6
        ]}

        links={[
            {
                name: 'Apple Store',
                url: 'https://apps.apple.com/us/app/river-run/id1417057746'
            }
        ]}
    />
)

export default RiverRun