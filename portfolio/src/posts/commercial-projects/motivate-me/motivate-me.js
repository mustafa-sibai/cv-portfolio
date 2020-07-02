import React from "react"

import Post from '../../../components/post'

import img from  './images/0.png'
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'

const MotivateMe = () => (
    <Post
        title={'Motivate Me!'}
        date={'March 2020 - April 2020'}

        youTubeVideo={'https://www.youtube.com/embed/yA2_WWzuPxo'}
        description={`Description: Four characters, each with unique voices, and music that will give you the motivation you need to get work done! It's as simple as swiping between characters and pressing a button!

Technology: Unity 3D, C#
        
Platforms: IOS, Android`}

        slideImages={[
            img,
            img1,
            img2,
            img3,
        ]}

        links={[
            {
                name: 'Apple Store',
                url: 'https://apps.apple.com/us/app/motivate-me/id1507784913'
            },
            {
                name: 'Google Play Store',
                url: 'https://play.google.com/store/apps/details?id=com.ManningMedia.Motivateme'
            }
        ]}
    />
)

export default MotivateMe