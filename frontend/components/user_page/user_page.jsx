import React from 'react';
import TrackItem from "../tracks/track_item";

class UserPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestUser(this.props.match.params.user_name);
  }


  render () {
    console.log(this.props);

    const artist = this.props.artist.length === 1 ?
      this.props.artist[0] : "";

    let track_display = "Loading";

    if (artist !== "") {
      track_display = (
          artist.tracks.map((track) => <TrackItem key={track.title}
                                                  track={track}/>)
      )
    }

    return (
      <div className="user-page">
        <div className="profile-stats">
          <img src={artist.thumb_nail_url}/>

          <div className="user-info">
            <span>{artist.username}</span>
            <span>{artist.name}</span>
            <span>{artist.location}</span>

          </div>
        </div>

        <div className="stream">
          <h1>My Tracks</h1>
          <ul>
            {track_display}
          </ul>
        </div>
      </div>
    )
  }
}

export default UserPage;
