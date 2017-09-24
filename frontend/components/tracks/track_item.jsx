import React from 'react';
import {Route, Link} from 'react-router-dom';
import { EditAndDeleteButtons } from './edit_delete';

export const TrackItem = ({track, currentUser, updateTrack, deleteTrack}) => {
    const handleClick = (e) => {
      e.preventDefault();
      e.target.value = e.target.value === "▶" ? "||" : "▶";
    }

    let modifyButtons = null;

    if (currentUser) {
      modifyButtons = currentUser.id === parseInt(track.artist_id) ?
        <EditAndDeleteButtons track={track}
                              deleteTrack={deleteTrack}
                              /> : null;
    }

    return (<li>
              <div id="thumb-nail">
                <Link to={`/${track.artist}/${track.title}`}>
                  <img height="160px" width="160px" src={track.thumb_nail_url}/>
                </Link>
              </div>

              <div id="information">
                <div id="first-row">
                  <button id="play-button-small">▶</button>
                    <div id="artist-and-title">
                      <span>{track.artist}</span>

                      <Link to={`/${track.artist}/${track.title}`}>
                                               {track.title}</Link>
                     </div>
                  </div>

                <div id="second-row">
                  <img height="75px" width="400px"
 src="https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/waveform.png"/>

                </div>

                <div id="third-row">
                   {modifyButtons}
                </div>
              </div>


            </li>);

};

export default TrackItem;



 //Deal with track Item later.

 // <audio src={"test"} type="audio/mp3"/>

 //  <button onClick={this.handleClick.bind(this)}>▶</button>
 //  {track.artist}
