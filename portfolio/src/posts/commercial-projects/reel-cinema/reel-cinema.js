import React from "react"

import Post from '../../../components/post'

import img from './images/0.png'
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.png'
import img5 from './images/5.png'

const ReelCinema = () => (
    <Post
        title={'Reel Cinema'}
        date={'September 2020 - December 2020'}

        youTubeVideo={'https://www.youtube.com/embed/OSBlbaEr-vw'}
        description={`Description: Reel Cinema App is a movie booking app I helped develop while working at Emmar PJSC. The App allows you to view, select, and book movies and pay for them using your debit or credit card.

Technology: React Native, Javascript, and Node.js.
      
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

export default ReelCinema