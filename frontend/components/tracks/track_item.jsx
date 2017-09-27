import React from 'react';
import {Link} from 'react-router-dom';
import { EditAndDeleteButtons } from './edit_delete';


export const TrackItem = ({track, currentUser, receiveTrackToPlay,
                           updateTrack, deleteTrack, nowPlaying}) => {


    let modifyButtons = null;
    if (currentUser) {
      modifyButtons = currentUser.id === parseInt(track.artist_id) ?
        <EditAndDeleteButtons track={track}
                              deleteTrack={deleteTrack}
                              /> : null;
    }

    let playButton = "▶";
    let playButtonId = "";

    if (nowPlaying && nowPlaying.id === track.id) {
      playButton = "||";
      playButtonId = "playing";
    }

    const handleQueue = (e) => {
      e.preventDefault();


      if (e.currentTarget.textContent === "||") {

        e.currentTarget.textContent = "▶";
        e.currentTarget.removeAttribute("id","playing");
        document.getElementsByClassName('react-audio-player')[0].pause()

      } else {

        let currently_playing = document.getElementById("playing");
        if (currently_playing) {
          currently_playing.textContent = "▶";
          currently_playing.removeAttribute('id','playing');
        }

        e.currentTarget.textContent = "||";
        e.currentTarget.setAttribute("id","playing");
        receiveTrackToPlay(track);
        document.getElementsByClassName('react-audio-player')[0].play();
      }
    }


    return (<li>
              <div id="track-item-thumb-nail">
                <Link to={`/${track.artist}/${track.title}`}>
                  <img height="100%" width="auto" src={track.thumb_nail_url}/>
                </Link>
              </div>

              <div id="information">
                <div id="first-row">
                  <button onClick={handleQueue}
                          className="play-button-small"
                          id={playButtonId}>{playButton}</button>

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
