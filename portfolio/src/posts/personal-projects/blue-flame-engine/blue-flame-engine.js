import React from "react"

import Post from '../../../components/post'

import img  from './images/0.jpg'
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import img4 from './images/4.jpg'
import img5 from './images/5.jpg'
import img6 from './images/6.jpg'
import img7 from './images/7.jpg'
import img8 from './images/8.jpg'
import img9 from './images/9.jpg'
import img10 from './images/10.jpg'
import img11 from './images/11.jpg'
import img12 from './images/12.jpg'

const BlueFlameEngine = () => (
    <Post
        title={'Blue Flame Engine'}
        date={'March 2016 – Present'}

        youTubeVideo={'https://www.youtube.com/embed/F-P3D9L87tE'}
        description={`Description: Blue Flame Engine is a 2D and 3D game engine written from scratch. The engine aims to provide a more performant way of building games than Unity 3D.

The engine supports many features including and not limited to Forward rendering, sprite batch rendering, Post-processing, Phong shading, point, spot, and directional light system, 3D math library, 2D physics engine, A* pathfinding, networking, and a C++ scripting system and more.
        
Blue Flame is an open-sourced MIT licensed engine up on GitHub.

Technology: C++, OpenGL 4.5, DirectX 11, OpenAL-Soft, FreeType, FreeImage, Autodesk FBX, Emscripten
        
Platforms: Windows, Linux, Android, Web`}

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
            img9,
            img10,
            img11,
            img12,
        ]}

        links={[
            {
                name: 'GitHub',
                url: 'https://www.google.com'
            }
        ]}
    />
)

export default BlueFlameEngine