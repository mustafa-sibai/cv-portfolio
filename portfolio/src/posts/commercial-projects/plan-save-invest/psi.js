import React from "react"

import Post from '../../../components/post'

import img from './images/0.png'
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.png'
import img5 from './images/5.png'
import img6 from './images/6.png'

const PSI = () => (
    <Post
        title={'Plan-Save-Invest (PSI)'}
        date={'September 2021 - March 2022'}

        youTubeVideo={'https://www.youtube.com/embed/SkPDFvH8Svg'}
        description={`Description: Beautify is an e-commerce and a salon service booking app that allows you to sell and buy beauty products and book salon services online. You can create a profile, and starting browsing salons near you.

Technology: React Native, Javascript, and Node.js, Google Cloud.
      
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
    />
)

export default PSI