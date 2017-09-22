import React from 'react';

export const TrackItem = ({track}) => {
    const source_url = track.track_recording.substring(0,4) + '-us-west-2' +
    track.track_recording.substring(4,track.track_recording.length);

    const handleClick = (e) => {
      e.preventDefault();
      e.target.value = e.target.value === "▶" ? "Pause" : "▶";
    }

    return (<li>
              Name: {track.title}>
            </li>);

};

export default TrackItem;



 //Deal with track Item later.

 // <audio src={"test"} type="audio/mp3"/>

 //  <button onClick={this.handleClick.bind(this)}>▶</button>
 //  {track.artist}
