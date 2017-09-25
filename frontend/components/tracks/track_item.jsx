import React from 'react';
import {Link} from 'react-router-dom';
import { EditAndDeleteButtons } from './edit_delete';


export const TrackItem = ({track, currentUser, receiveTrackToPlay,
                           updateTrack, deleteTrack}) => {
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


    const handleQueue = (e) => {
      e.preventDefault();
      receiveTrackToPlay(track);
    }

    return (<li>
              <div id="track-item-thumb-nail">
                <Link to={`/${track.artist}/${track.title}`}>
                  <img height="100%" width="auto" src={track.thumb_nail_url}/>
                </Link>
              </div>

              <div id="information">
                <div id="first-row">
                  <button onClick={handleQueue.bind(this)}
                          id="play-button-small">▶</button>

                    <div id="artist-and-title">
                      <span><Link to={`/users/${track.artist}`}>
                                    {track.artist}</Link></span>

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
