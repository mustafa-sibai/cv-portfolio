import React from "react"

import Post from '../../../components/post'

import img from './images/0.png'
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.png'
import img5 from './images/5.png'

const SideWheel2 = () => (
    <Post
        title={'Side Wheel 2'}
        date={'March 2017 - July 2017'}

        youTubeVideo={'https://www.youtube.com/embed/E3QY2__G290'}
        description={`Description: Side Wheel 2 is a multiplayer game where you have to get a 4×4 car up on its side on two wheels. The longer you have the car on its side the higher your score is.

The game has a shop where you can unlock new vehicles, decals, license plates, and skins.
      
Technology: C#, Unity 3D
      
Platforms: IOS, Android`}

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
                name: 'Apple Store',
                url: 'https://apps.apple.com/us/app/%D9%85%D9%84%D9%83-%D8%A7%D9%84%D8%AA%D8%B1%D9%81%D9%8A%D8%B9-side-wheel-hero/id841622456'
            }
        ]}
    />
)

export default SideWheel2