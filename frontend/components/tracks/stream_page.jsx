import React from 'react';
import {Link} from 'react-router-dom';

class StreamPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestTracks();
  }

  render() {
    //put more here soon.
    return (
      <div className="stream">
        <ul>
        {
          this.props.tracks.map((track) => {return (<li>{track.title}</li>)})
        }
      </ul>
      </div>
    );
  }
}

export default StreamPage;
