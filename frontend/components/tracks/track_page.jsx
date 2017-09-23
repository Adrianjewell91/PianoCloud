import React from 'react';

class TrackPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    //Find the song by id from this.props.tracks.
    console.log(this.props);
    this.props.requestTrack(this.props.match.params.track_name)
  }


  handleEditClick (e) {
    e.preventDefault();
  }

  handleDeleteClick (e) {
    e.preventDefault();
    const id = this.props.tracks[0].id;
    this.props.deleteTrack(id).then(this.props.history.push('/stream'));
  }

  render () {

    const track = this.props.tracks.length === 1 ?
      this.props.tracks[0] : "";

    const editButton = <button onClick={this.handleEditClick.bind(this)}>
                         Edit</button>;
    const deleteButton = <button onClick={this.handleDeleteClick.bind(this)}>
                         Delete</button>;

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
