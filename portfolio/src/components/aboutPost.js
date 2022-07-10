import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import './fonts.css'

const AboutPost = (props) => {

    return (
        <div style={{ width: '100%' /*,backgroundColor: 'green'*/ }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <h1 style={{ color: 'rgb(162, 162, 162)' }}>{props.title}</h1>
                <div style={{ marginTop: '-15px', marginBottom: '1em', fontSize: '16pt', color: 'rgb(120, 120, 120)' }}>{props.date}</div>
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%'
            }}>

                <div style={{ width: '75%', marginRight: '2em' }} >
                    <StaticImage
                        alt='Mustafa Sibai'
                        src="../images/profilePicture.jpg"
                    />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <p style={{ color: 'rgb(162, 162, 162)', whiteSpace: 'pre-wrap' }}>
                        {`Hello, I’m Mustafa Sibai. I’m a Full Stack Developer, an engine programmer, a game developer, and a games lecturer. I am passionate about programming, game development, computer graphics, and pushing hardware to the limit. 
                        
I have worked on multiple technologies such as Unity Engine, Unreal Engine, OpenGL, DirectX, GLSL/HLSL/CG, ARKit, ARCore, Vive VR, Computer Vision, WinSocket 2, WebSocket, Native Android and IOS, React, React Native, Node.js, Gatsby, AWS, GCP, and more… 

I have developed and published two game engines, multiple game titles, and apps, participated in the Global Game Jam four years in a row since 2017. 

My biggest personal project is my game engine. Blue Flame Engine supports Windows, Linux, Android, and Web. It was built from scratch using C++, OpenGL 4.5, and DirectX 11.`}
                    </p>
                    <h4 style={{ color: 'rgb(255, 255, 255)', whiteSpace: 'pre-wrap' }}>
                        {`View my CV at  `}
                        <a style={{ color: 'rgb(255, 255, 255)', whiteSpace: 'pre-wrap' }} href="https://m-sibai.com/cv" target="_blank"
                            rel="noreferrer noopener">m-sibai.com/cv</a>
                    </h4>
                </div>

            </div>

            <div style={{
                width: '100%',
                paddingBottom: '2em',
                marginBottom: '3em',
                borderBottomStyle: 'solid',
                borderColor: 'rgb(62, 62, 62)'
            }} />
        </div >
    )
}

export default AboutPost