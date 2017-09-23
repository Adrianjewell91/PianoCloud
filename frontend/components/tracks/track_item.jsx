import React from 'react';
import {Route, Link} from 'react-router-dom';
import { EditAndDeleteButtons } from './edit_delete';

export const TrackItem = ({track, currentUser, updateTrack, deleteTrack}) => {
    const handleClick = (e) => {
      e.preventDefault();
      e.target.value = e.target.value === "▶" ? "||" : "▶";
    }

    //test if the currentUser.id === the track_name.artist_id, if so, show the
    // edit and delete buttons.

    let modifyButtons = null;

    if (currentUser) {
      modifyButtons = currentUser.id === parseInt(track.artist_id) ?
        <EditAndDeleteButtons track={track}
                              deleteTrack={deleteTrack}
                              /> : null;
    }

    return (<li>
              {track.artist}

              <br/>

              <Link to={`/${track.artist}/${track.title}`}>{track.title}</Link>

              {modifyButtons}
            </li>);

};

export default TrackItem;



 //Deal with track Item later.

 // <audio src={"test"} type="audio/mp3"/>

 //  <button onClick={this.handleClick.bind(this)}>▶</button>
 //  {track.artist}
