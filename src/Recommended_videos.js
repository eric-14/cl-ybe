import React from 'react'
import './recommended.css'
import VideoCard from "./VideoCard"

function Recommended_videos() {
    return (
        <div className="recommended_videos">
            <h2>Recommended</h2>
            <div className="recommendedVideos_vides">
       
            
                <VideoCard 
                title = "How to become a programmer"
                views="2.3M views"
                timestamp="3 days ago"
                channelImage=""
             channel="Eric"
             image="https://www.bing.com/rp/n_C4vBfAV3O9RfkGjfduaZoxjAs.jpg"/>
                
                <VideoCard 
                title = "How to become a programmer"
                views="2.3M views"
                timestamp="3 days ago"
                channelImage="https://album5.cdn107.com/68/8c/688c46b4bf7b91a209813e6e13787fb1_xl.jpg?i=1"
                channel="Eric"
             image="https://www.bing.com/rp/n1U5gwBiwMo7s-fWOh2kSe3Kils.jpg"/>

             <VideoCard 
                title = "How to become a programmer"
                views="2.3M views"
                timestamp="3 days ago"
                channelImage="https://artist2.jango.com/6cf/6cff389135ab818f7de4a322e852443e_lg.jpg"
                channel="Eric"
             image="https://www.bing.com/rp/b4Jy0kwhnsWcsDQyuzAEsN7RmhQ.jpg "/>

<VideoCard 
                title = "How to become a programmer"
                views="2.3M views"
                timestamp="3 days ago"
                channelImage="https://album6.cdn107.com/5a/13/5a13bf3385238f6ed167db2b3c817ddf_xl.jpg?i=1"
                channel="Eric"
             image="https://www.bing.com/rp/CMm2G4GK3T9XHTMByeN2QI1OVUs.jpg" />
            
            
            
             
           
                </div>

             {/*Title */ }
            {/* Timestamp */}
            {/* Avatar Image */}
            {/* Channel name */}
            {/* Image Thumbnail */}
        </div>
    )
}

export default Recommended_videos
