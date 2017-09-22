import React from 'react';

class TrackPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //Find the song by id from this.props.tracks.
    this.props.requestTrack(this.props.match.params.track_name);
  }



  render () {

    const track = this.props.tracks.length > 0 ?
      this.props.tracks[0] : "";

    const editButton = <button>Edit</button>;
    const deleteButton = <button>Delete</button>;

    return (
      <div>
        {track.title}
        {editButton}
        {deleteButton}
      </div>
    );
  }
}

export default TrackPage;
