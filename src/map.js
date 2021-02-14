/* eslint-disable no-undef */

import React, {useEffect, useState} from "react";
const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");

const { compose, withProps, withState, withHandlers } = require("recompose");
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");
const {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} = require("react-google-maps");
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");

const getPixelPositionOffset = (width, height) => ({
    x: -(width / 2),
    y: -(height / 2),
})

export const Map = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAWtOrr3OGWQ2i2IGWd3y8VnXRGmBvnUas",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `80vh` }} />,
        mapElement: <div style={{ height: `100%` }} />,
        center: { lat: 25.03, lng: 121.6 },
    }),
    withState('zoom', 'onZoomChange', 13),
    withHandlers(() => {
        const refs = {
            map: undefined,
        }

        return {
            onMapMounted: () => ref => {
                refs.map = ref
            },
            onZoomChanged: ({ onZoomChange }) => () => {

                // console.log(refs.map)
                // onZoomChange(refs.map.getZoom())
                // console.log(refs.map.getCenter().lat())
                // console.log(refs.map.getCenter().lng())
                // console.log(refs.map.getBounds())
            },
        }
    }),
    withScriptjs,
    withGoogleMap
)(props => <CustomMap {...props}/>);

export const CustomMap = (props) => {
    return (
        <GoogleMap
            defaultCenter={{ lat: -33.91075134, lng: 151.19416809 }}
            zoom={props.zoom}
            options={{
                minZoom: 2,
                maxZoom: 18
            }}
            ref={props.onMapMounted}
            onZoomChanged={props.onZoomChanged}>
            <MarkerClusterer
                averageCenter
                enableRetinaIcons
                gridSize={60}>
                {
                    props.videos.map((video, ind) => {
                        return (
                            <CustomMarker marker={video} key={ind}/>
                        )
                    })
                }
            </MarkerClusterer>
        </GoogleMap>
    )
}

export const CustomMarker = ({marker}) => {

    const [showLabel, setShowLabel] = useState(false);
    const icon = {
        url: marker.UserPhoto, // url
        scaledSize: new google.maps.Size(40, 40), // scaled size
        origin: new google.maps.Point(0, 0), // origin
    };

    return (
        <>
            <MarkerWithLabel
                icon={icon}
                zIndex={100}
                onMouseOut={() => setShowLabel(false)}
                onMouseOver={() => setShowLabel(true)}
                defaultClickable={true}
                onClick={(e) => e?.target?.href? window.open(e.target.href) : ""}
                defaultDraggable={true}
                clickable={true}
                labelClass={`marker-label ${showLabel? "active" : ""}`}
                position={{lat: +marker.lat, lng: +marker.lng}}
                labelAnchor={new google.maps.Point(110, -10)}>
                <div
                    className={`marker-label-content`}>
                    <div className="info-item"><div className="img"><img src={marker.UserPhoto} alt="user image"/></div></div>
                    <div className="info-item">Category: <span className="info-item-value">{marker.category}</span></div>
                    <div className="info-item">Likes: <span className="info-item-value">{marker.likes}</span></div>
                    <div className="info-item">Dislikes: <span className="info-item-value">{marker.dislikes}</span></div>
                    <div className="info-item">
                        Link:
                        <a
                            href={marker.pageUrl}
                            className={"info-item-value link"}>
                            {marker.pageUrl}
                        </a>
                    </div>
                    <div className="info-item">Views: <span className="info-item-value">{marker.views_count}</span></div>
                    <div className="info-item">Created: <span className="info-item-value">{marker.createdHumanTiming}</span></div>
                </div>
            </MarkerWithLabel>
        </>
    )
}


// `https://gist.githubusercontent.com/farrrr/dfda7dd7fccfec5474d3/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`

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
