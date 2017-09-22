import React from 'react';

class TrackPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //Find the song by id from this.props.tracks.
    this.props.requestTrack(this.props.match.params.track_name);
  }

  // componentWillReceiveProps(newProps) {
  //   if (this.props.params.track_name !== this.newProps.params.track_name) {
  //       this.props.requestTrack(this.newProps.match.params.track_name);
  //   }
  // }

  render () {
    console.log(this.props);
    const track = this.props.tracks.length > 0 ?
      this.props.tracks[0] : "";

    return (
      <div>
        {track.title}
      </div>
    );
  }
}

export default TrackPage;
