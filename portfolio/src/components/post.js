import React from 'react'
import { Slide } from 'react-slideshow-image';
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
                <p style={{ color: 'rgb(120, 120, 120)', whiteSpace: 'pre-wrap' }}> {`Links: `}</p>
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
        <div style={{ width: '100%' /*,backgroundColor: 'green'*/ }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <h1 style={{ fontFamily: 'AvenirNextLTProRegular', color: 'rgb(162, 162, 162)' }}>{props.title}</h1>
                <div style={{ marginTop: '-15px', marginBottom: '1em', fontSize: '16pt', fontFamily: 'AvenirNextLTProRegular', color: 'rgb(120, 120, 120)' }}>{props.date}</div>
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
                width: '100%'/*,
                backgroundColor: 'pink'*/
            }}>
                <div style={{ width: '48.1%', height: '100%'/*, backgroundColor: 'red'*/ }}>
                    <Slide {...properties}>
                        {
                            props.slideImages.map((item) => {
                                return (
                                    <div style={{
                                        marginTop: '1.25em',
                                        height: '254px',
                                        backgroundSize: 'contain',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundImage: `url(${item})`
                                    }}>
                                    </div>
                                )
                            })
                        }
                    </Slide>
                </div>

                <div style={{ width: '50%', height: '100%', marginLeft: '1em'/*, backgroundColor: 'blue'*/ }}>
                    <p style={{ fontFamily: 'AvenirNextLTProRegular', marginTop: '1em', color: 'rgb(120, 120, 120)', whiteSpace: 'break-spaces' }}>{`${props.description}`}</p>

                    <Links links={props.links} />

                </div>
            </div>
            <BottomBorder removeBottomBorder={props.removeBottomBorder} />
        </div >
    )
}

export default Post