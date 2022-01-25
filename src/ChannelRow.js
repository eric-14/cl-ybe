import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './channelrow.css'


import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';

function ChannelRow({image,channel,subs,verified,noofvideos,description}) {
    return (
        <div className="channelrow">
            <Avatar className="channelrow_logo" img={image} alt={channel}/>

            <div className="channelrow_details">
                <h4>{channel} {verified && <CheckCircleOutline /> }</h4>
                <p>{subs} subscribers . {noofvideos} videos</p>
                <p>{description}</p>
    

    


            </div>
        </div>
    )
}

export default ChannelRow
