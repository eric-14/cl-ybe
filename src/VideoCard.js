import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './VideoCard.css'

function videocard({image,title,channel,views,timestamp,channelImage}) {
    return (
        <div className="videoCard">
            <img className="Videocard_thumbnail" src={image} alt=""></img>

                <div className="videocard__info">
                    <Avatar className="videocard_avatar"  src={channelImage} alt={channel} />
                    <div className="video_text">
                        <h1>{title}</h1>
                        <p>{channel}</p>
                        <div className="videocard_text2">
                            <p className="videocard_views">{views}</p>
                            <p>{ timestamp}</p>
                        </div>
                     </div>

                </div>
        </div>
    )
}

export default videocard
