import {Map} from "./map";
import React, {useEffect, useState} from "react";
import "./app.sass"
import {getVideos} from "./servers/servers";

function App() {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos().then(({data}={}) => setVideos(data.videos))
    }, [])

    if(!videos) return "";

    return (
        <div className="App">
            <Map videos = {videos}/>
        </div>
    );
}

export default App;
