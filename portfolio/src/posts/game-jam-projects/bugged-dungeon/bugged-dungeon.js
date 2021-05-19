import React from "react"

import Post from '../../../components/post'

import img from  './images/0.jpg'
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import img4 from './images/4.jpg'
import img5 from './images/5.jpg'

const BuggedDungeon = () => (
    <Post
        title={'Bugged Dungeon'}
        date={'January 2021'}

        youTubeVideo={'https://www.youtube.com/embed/xohuuj-hqGM'}
        description={`Description: Bugged Dungeon is a puzzle game where you have to escape the dungeon by finding the lost 'keys'. The game has five levels each with a unique puzzle. Can you escape the dungeon?

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
                url: 'https://globalgamejam.org/2021/games/bugged-dungeon-3'
            }
        ]}
    />
)

export default BuggedDungeon