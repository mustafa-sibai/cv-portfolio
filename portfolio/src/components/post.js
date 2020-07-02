import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './fonts.css'

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
}

const BottomBorder = (props) => {
    if (props.removeBottomBorder) {
        return <div style={{
            width: '100%',
            paddingBottom: '5em',
            marginBottom: '3em'
        }} />
    }
    else {
        return <div style={{
            width: '100%',
            paddingBottom: '2em',
            marginBottom: '3em',
            borderBottomStyle: 'solid',
            borderColor: 'rgb(62, 62, 62)'
        }} />
    }
}

const Links = (props) => {
    if (props.links === undefined) {
        return <div></div>
    } else {
        return (
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <p style={{ whiteSpace: 'pre-wrap' }}> {`Links: `}</p>
                {
                    props.links.map((item, index) => {
                        if (index === props.links.length - 1) {
                            return (
                                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                    <a href={item.url} target='_blank' rel='noreferrer noopener'>{item.name}</a>
                                </div>
                            )
                        } else {
                            return (
                                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                    <a href={item.url} target='_blank' rel='noreferrer noopener'>{item.name}</a>
                                    <p style={{ whiteSpace: 'pre-wrap' }}> {` | `}</p>
                                </div>
                            )
                        }
                    })
                }
            </div>
        )
    }
}

const Post = (props) => {
    return (
        <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <h1 style={{ color: 'rgb(172, 172, 172)' }}>{props.title}</h1>
                <div style={{ marginTop: '-15px', marginBottom: '1em', fontSize: '16pt', color: 'rgb(120, 120, 120)' }}>{props.date}</div>
            </div>

            <iframe
                style={{ margin: 0, padding: 0, width: '100%', height: '519px' }}
                title={props.title}
                src={props.youTubeVideo}
                frameborder='0'
                allowfullscreen='allowfullscreen'
            />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%'
            }}>
                <div style={{ width: '48.1%', height: '100%' }}>
                    <Slide {...properties}>
                        {
                            props.slideImages.map((item) => {
                                return (
                                    <img src={'.' + item} alt={'Mustafa Sibai'} />
                                )
                            })
                        }
                    </Slide>
                </div>

                <div style={{ width: '50%', height: '100%', marginLeft: '1em' }}>
                    <p style={{ marginTop: '1em', whiteSpace: 'break-spaces' }}>{`${props.description}`}</p>
                    <Links links={props.links} />
                </div>
            </div>
            <BottomBorder removeBottomBorder={props.removeBottomBorder} />
        </div >
    )
}

export default Post