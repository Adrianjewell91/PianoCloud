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
    debugger
    if (artist !== "") {
      track_display = (
          artist.tracks.map((track) => <TrackItem key={track.title}
                                                  track={track}/>)
      )
    }

    return (
      <div className="user-page">

        <div className="stream">
          <ul>
            {track_display}
          </ul>
        </div>
      </div>
    )
  }
}

export default UserPage;
