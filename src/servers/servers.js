import axios from "axios";

export const getVideos = async() => {
    let options = {
        method: "post",
        url: `https://api.social-media.in.ua/api/v1/getVideoByLocation.php `,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer a22ade17030f9db1fe315d33f51bbb0d"
        },
        data: {
            "zoom": 4,
            "center": {
                "lat": -77.03639984,
                "lng": 38.89509964
            },
            "visible_area": {
                "Qa": {
                    "i" : -180,
                    "j" : -180
                },
                "Va": {
                    "i" : -77.03639984,
                    "j" : 38.89509964
                }
            }
        }
    };
    const res = await axios(options);
    return res
};


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
            "lat": "-77.03639984",
            "lng": "38.89509964",
            "category": "Default",
            "likes": 0,
            "dislikes": 0,
            "pageUrl": "https://api.social-media.in.ua/video/nogpeajtottwumrc11mp4",
            "videoUrl": "https://api.social-media.in.ua/videoEmbeded/nogpeajtottwumrc11mp4",
            "UserPhoto": "https://api.social-media.in.ua/view/img/userSilhouette.jpg"

        }
    ]
}