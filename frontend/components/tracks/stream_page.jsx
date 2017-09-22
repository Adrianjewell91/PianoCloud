import React from 'react';
import {Link} from 'react-router-dom';

import {TrackItem} from './track_item';

class StreamPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestTracks();
  }

  render() {
    //put more here soon.
    console.log(this.props);
    return (
      <div className="stream">
        <ul>
        {
          this.props.tracks.map((track) => {return <TrackItem track={track} />})
        }
      </ul>
      </div>
    );
  }
}

export default StreamPage;
