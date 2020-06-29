import React from "react"

import Post from '../../../components/post'

import img from './images/0.png'
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.png'
import img5 from './images/5.png'

const RaceStart2 = () => (
    <Post
        title={'Race Start 2'}
        date={'February 2015 - August 2015'}

        youTubeVideo={'https://www.youtube.com/embed/1JYzfh15bDo'}
        description={`Description: Race Start 2 is a single player infinite runner style game where you have to collect as many coins as possible before the timer ends. The game also has a multiplayer mode where you have to battle four other players to get the key to the treasure chest. The first person to unlock the chest wins!

The game has a shop where you can unlock new characters and unlock new skins for each character.

The game also has a friend system where you can add friends and chat with them and invite them to your game if they are online.

Technology: Unity 3D, C#

Platforms: IOS, Android`}
        slideImages={[
            img,
            img1,
            img2,
            img3,
            img4,
            img5
        ]}
    />
)

export default RaceStart2