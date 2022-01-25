import React from 'react'
import './searchpage.css'
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
function Searchpage() {
    return (
        <div className="searchpage">
            <div className="searchpage_filter">
                <TuneIcon />
                <h2>FILTER</h2>

            </div>

            <hr/>
            <ChannelRow
            image="https://www.bing.com/rp/kBH4DSEA84cgV7IKw7_Bwvm2NpI.jpg"
            channel="This channel"
            verified="True"
            subs="660k"
            noofvideos={300}
            description="Learn coding fast"/>

           <hr/> 
           <VideoRow 
            views="16k"
            title="Diego Carlos Bid Accepted"
            subs="150K"
            description ="Awaiting Medical"
            timestamp="2 minutes "
            channel="Liverpool_Transfers"
            image="https://s.yimg.com/it/api/res/1.2/I34KciuWwN24nzWQHLjOCg--~A/YXBwaWQ9eW5ld3M7c209MTt3PTgwMDtoPTYwMA--/https://media.zenfs.com/en-US/nbcsports.com/b137df498ee899b6f679a07e4d2c04be"
            />
            
            <VideoRow 
            views="110k"
            title="Economy"
            subs="5K"
            description ="Status of the world economy"
            timestamp="3 days ago"
            channel="Economars"
            image="https://s3-media0.fl.yelpcdn.com/assets/public/movers@2x.yji-9f700a653ef1427dbd92269dcfaad22b.jpg"
            />
            <VideoRow 
            views="123k"
            title="Gyms"
            subs="8K"
            description ="Live a healthy life"
            timestamp="3 days ago"
            channel="Gyms_all_over"
            image="https://s3-media0.fl.yelpcdn.com/assets/public/gyms@2x.yji-3fb0a4f3e62f2e048ff6b94dcc909a4b.jpg"
            />
            <VideoRow 
            views="110k"
            title="Become Vegan"
            subs="5K"
            description ="Vegan Pizza"
            timestamp="1 minute ago"
            channel="Vegeeees"
            image="https://s3-media0.fl.yelpcdn.com/bphoto/WluOaTRGRtRH0FWjTNN6xg/348s.jpg"
            />
           




        </div>
    )
}

export default Searchpage
