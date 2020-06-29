import React from "react"

import Post from '../../../components/post'

import img from  './images/0.jpg'
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import img4 from './images/4.jpg'
import img5 from './images/5.jpg'
import img6 from './images/6.jpg'
import img7 from './images/7.jpg'
import img8 from './images/8.jpg'
import img9 from './images/9.jpg'

const DIWhyArmourGuy = () => (
    <Post
        title={'D-I-Why? Armour Guy'}
        date={'January 2020'}

        youTubeVideo={'https://www.youtube.com/embed/z0Qa7-QL4uQ'}
        description={`Description: D-I-Why? Armour Guy is a game about a shifty frog fixing armor for adventurers. Mr.Frog has three tools at his disposal to fix a variety of armor defects!

Technology: Unity 3D, C#
        
Platforms: Windows`}

        slideImages={[
            img,
            img1,
            img2,
            img3,
            img4,
            img5,
            img6,
            img7,
            img8,
            img9
        ]}

        links={[
            {
                name: 'Global Game Jam',
                url: 'https://globalgamejam.org/2020/games/d-i-why-armour-guy-4'
            }
        ]}
    />
)

export default DIWhyArmourGuy