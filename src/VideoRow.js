import React from 'react'
import './videorow.css'
function VideoRow({
    views,
    subs,
    title,
    description, 
    timestamp, 
    channel,
    image}) {
    return (
        <div className="videorow">
           <img src={image} alt={description}></img>
           <div className="videorow_text">
                <h3>{title}</h3>
                <p className="videorow__headline">
                    {channel} .
                    <span className="videorow_subs">
                        <span className="videorow_subsnumber"> {subs} </span>Subscribers
                    </span>  {views} views . {timestamp}
                </p>
            <p className="videorow_description">{description}</p>
           </div>
        </div>
    )
}

export default VideoRow
