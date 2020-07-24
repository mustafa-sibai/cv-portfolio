import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import './fonts.css'

export const fluidImage = graphql`
 fragment fluidImage on File {
   childImageSharp {
     fluid(maxWidth: 1000) {
       ...GatsbyImageSharpFluid
     }
   }
 }
 `;

const query = graphql`
 query {
   mustafaSibaiProfilePicture: file(relativePath: { eq: "profilePicture.jpg" }) {
     ...fluidImage
   }
 }
 `;
//                    


const AboutPost = (props) => {
    const data = useStaticQuery(query);

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
                    <Img fluid={data.mustafaSibaiProfilePicture.childImageSharp.fluid} alt={'Mustafa Sibai'} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <p style={{ color: 'rgb(162, 162, 162)', whiteSpace: 'pre-wrap' }}>
                        {`Hello, I’m Mustafa Sibai. I’m an engine programmer, game developer, and a games lecturer. I am passionate about game development, computer graphics, and pushing hardware to the limit. 
                        
I have worked on multiple technologies like Unity3D, OpenGL, DirectX, GLSL/HLSL/CG, ARKit, ARCore, Vive VR, Computer Vision, WinSocket 2, React, React Native, Node.js, Gatsby, and more… 

I have developed and published two game engines, multiple game titles, and apps, and I have participated in the Global Game Jam four years in a row since 2017. 

My biggest personal project is my game engine. Blue Flame Engine supports Windows, Linux, Android, and Web. It was built from scratch using C++, OpenGL 4.5, and DirectX 11.`}
                    </p>
                    <h4 style={{ color: 'rgb(255, 255, 255)', whiteSpace: 'pre-wrap' }}>
                        {`View my CV at  `}
                        <a style={{ color: 'rgb(255, 255, 255)', whiteSpace: 'pre-wrap' }}href="https://m-sibai.com/cv" target="_blank"
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