import {Map} from "./map";
import React, {useEffect, useState} from "react";
import "./app.sass"
import {getVideos} from "./servers/servers";

function App() {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        // if(process.env.NODE_ENV === "development") return setVideos(data.videos);
        fetchVideos()
    }, [])

    const fetchVideos = (data) => {
        getVideos(data).then(({data}={}) => setVideos(data.videos))
    }

    if(!videos) return "";

    return (
        <div className="App">
            <Map videos = {videos} fetchVideos={fetchVideos}/>
        </div>
    );
}

export default App;

const data = {
    "current": null,
    "rowCount": null,
    "total": 7,
    "videos": [
        {
            "createdHumanTiming": "2 days",
            "user": "admin",
            "created": "2021-02-08 15:16:17",
            "image": "https://api.social-media.in.ua/view/img/notfound.jpg",
            "channelName": "support",
            "first_name": null,
            "last_name": null,
            "description": "",
            "views_count": 6,
            "duration": "0:00:22",
            "type": "video",
            "lat": -77.03639984,
            "lng": 38.89509964,
            "category": "Default",
            "likes": 0,
            "dislikes": 0,
            "pageUrl": "https://api.social-media.in.ua/video/nogpeajtottwumrc11mp4",
            "videoUrl": "https://api.social-media.in.ua/videoEmbeded/nogpeajtottwumrc11mp4",
            "UserPhoto": "https://api.social-media.in.ua/view/img/userSilhouette.jpg"
        },
        {
            "createdHumanTiming": "2 days",
            "user": "admin",
            "created": "2021-02-08 15:16:17",
            "image": "https://api.social-media.in.ua/view/img/notfound.jpg",
            "channelName": "support",
            "first_name": null,
            "last_name": null,
            "description": "",
            "views_count": 6,
            "duration": "0:00:22",
            "type": "video",
            "lat": 23.03639984,
            "lng": 45.89509964,
            "category": "Default",
            "likes": 0,
            "dislikes": 0,
            "pageUrl": "https://api.social-media.in.ua/video/nogpeajtottwumrc11mp4",
            "videoUrl": "https://api.social-media.in.ua/videoEmbeded/nogpeajtottwumrc11mp4",
            "UserPhoto": "https://api.social-media.in.ua/view/img/userSilhouette.jpg"
        },
        {
            "createdHumanTiming": "2 days",
            "user": "admin",
            "created": "2021-02-08 15:16:17",
            "image": "https://api.social-media.in.ua/view/img/notfound.jpg",
            "channelName": "support",
            "first_name": null,
            "last_name": null,
            "description": "",
            "views_count": 6,
            "duration": "0:00:22",
            "type": "video",
            "lat": -1.03639984,
            "lng": 33.89509964,
            "category": "Default",
            "likes": 0,
            "dislikes": 0,
            "pageUrl": "https://api.social-media.in.ua/video/nogpeajtottwumrc11mp4",
            "videoUrl": "https://api.social-media.in.ua/videoEmbeded/nogpeajtottwumrc11mp4",
            "UserPhoto": "https://api.social-media.in.ua/view/img/userSilhouette.jpg"
        },
    ]
}

