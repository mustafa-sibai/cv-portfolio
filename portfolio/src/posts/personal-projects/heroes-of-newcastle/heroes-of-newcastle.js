import React from "react"

import Post from '../../../components/post'

import img  from './images/0.jpg'
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'

const HeroesOfNewcastle = () => (
    <Post
        title={'Heroes of Newcastle'}
        date={'October 2012 - March 2014'}

        youTubeVideo={'https://www.youtube.com/embed/Ce2iJN59RUA'}
        description={`Description: Heroes of Newcastle is both a single player and multiplayer tower defense game that I developed on the Vault-Tech engine. The game supports up to four players co-op where all the players have to cooperate to defeat all the enemies before they reach the castle.

The game is built on the client/server architecture. The game allows the players to chat with each other using TCP protocol. The game play uses the UDP protocol.
        
Technology: Vault-Tech, XNA, C#
        
Platforms: Windows`}

        slideImages={[
            img,
            img1,
            img2,
        ]}
    />
)

export default HeroesOfNewcastle