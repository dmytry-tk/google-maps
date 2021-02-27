/* eslint-disable no-undef */

import React, {useEffect, useRef, useState} from "react";

const { compose, withProps, withState, withHandlers, lifecycle } = require("recompose");
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");
const {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} = require("react-google-maps");
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");
const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");
const { StandaloneSearchBox } = require("react-google-maps/lib/components/places/StandaloneSearchBox");

const getPixelPositionOffset = (width, height) => ({
    x: -(width / 2),
    y: -(height / 2),
})

export const Map = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA-gUZ12AVTL5DncTX_ilJAMhwCiocVvjg&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `80vh` }} />,
        mapElement: <div style={{ height: `100%` }} />,
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
    lifecycle({
        componentWillMount() {
            const refs = {}

            this.setState({
                places: [],
                onSearchBoxMounted: ref => {
                    refs.searchBox = ref;
                },
                onPlacesChanged: () => {
                    const places = refs.searchBox.getPlaces();
                    console.log(refs.searchBox.getPlaces())
                    this.setState({
                        places,
                    });
                },
            })
        },
    }),
    withScriptjs,
    withGoogleMap
)(props => <CustomMap {...props}/>);

export const CustomMap = (props) => {
    const [center, setCenter] = useState({ lat: -33.91075134, lng: 151.19416809 })
    const refSearch = useRef({getPlaces: () => {}})

    const changeCenter = () => {
        const lat = refSearch.current.getPlaces()[0].geometry.location.lat()
        const lng = refSearch.current.getPlaces()[0].geometry.location.lng()
        setCenter({lat, lng})
    }
    return (
        <GoogleMap
            defaultCenter={{ lat: -33.91075134, lng: 151.19416809 }}
            center={center}
            zoom={props.zoom}
            options={{
                minZoom: 2,
                maxZoom: 18
            }}
            ref={props.onMapMounted}
            onZoomChanged={props.onZoomChanged}>
            <div data-standalone-searchbox="">
                <StandaloneSearchBox
                    ref={ref => {props.onSearchBoxMounted(ref); refSearch.current = ref}}
                    bounds={props.bounds}
                    onPlacesChanged={changeCenter}>
                    <input
                        type="text"
                        placeholder="Customized your placeholder"
                        style={{
                            boxSizing: `border-box`,
                            border: `1px solid transparent`,
                            width: `240px`,
                            height: `32px`,
                            padding: `0 12px`,
                            borderRadius: `3px`,
                            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                            fontSize: `14px`,
                            outline: `none`,
                            textOverflow: `ellipses`,
                        }}
                    />
                </StandaloneSearchBox>
            </div>
            <MarkerClusterer
                averageCenter
                clusterClass={"cluster-videos"}
                // enableRetinaIcons
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
                onClick={(ref) =>  console.log(ref)}
                defaultDraggable={true}
                clickable={true}
                labelClass={`marker-label ${showLabel? "active" : ""}`}
                position={{lat: +marker.lat, lng: +marker.lng}}
                labelAnchor={new google.maps.Point(110, -10)}>
                <div
                    className={`marker-label-content zF`}>
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