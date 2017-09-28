import React from 'react';

import TrackItem from '../tracks/track_item';

class SearchList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="stream">
        <h1>Search Results: Found {this.props.tracks.length} Item(s).</h1>

        <ul>
        {
          this.props.tracks.map((track) => {
            return <TrackItem key={track.title}
                            track={track}
                      currentUser={this.props.currentUser}
                        editTrack={this.props.updateTrack}
                      deleteTrack={this.props.deleteTrack}
               receiveTrackToPlay={this.props.receiveTrackToPlay}
                       nowPlaying={this.props.nowPlaying}/>})
        }
        </ul>
      </div>
    );
  }

}

export default SearchList;
