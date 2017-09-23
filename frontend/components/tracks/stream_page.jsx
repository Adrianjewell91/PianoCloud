import React from 'react';
import {Link} from 'react-router-dom';

import {TrackItem} from './track_item';

class StreamPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestTracks();
  }

  render() {

    return (
      <div className="stream">
        <ul>
        {
          this.props.tracks.map((track) => {
            return <TrackItem key={track.title}
                            track={track}
                      currentUser={this.props.currentUser}
                        editTrack={this.props.updateTrack}
                      deleteTrack={this.props.deleteTrack}/>})
        }
        </ul>
      </div>
    );
  }
}

export default StreamPage;
