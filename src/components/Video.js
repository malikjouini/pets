import React from 'react'

function Video() {
    return (
        <div className='main'>
            <video src='video/video.mp4' muted loop autoPlay ></video>
            <div className="patterns">
                <svg width="100%" height="100%">
                    <text x="50%" y="100%" text-anchor="middle"  >
                        I BREATHE ANIMALS
                    </text>
                </svg>
            </div>
            <div className='btn-main'>
                <button className='btn '> Get Started</button>
            </div>

        </div>
    )
}

export default Video
