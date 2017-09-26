import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {body: ""}
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.createComment(this.state, this.props.trackId)
      .then(() => this.setState({body: ""}));
  }

  update (field) {
    return (e) => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    }
  }

  render() {
  let display = "";

  if(this.props.currentUser) {
      display = (
        <div>
          <div className="comment-pic-frame">
              <img className="comment-pic"
                   src={this.props.currentUser.thumb_nail_url}/>
          </div>

          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text"
                   onChange={this.update("body")}
                   value={this.state.body}
                   placeholder="Write a comment"></input>
          </form>
      </div>)
  }

    return (
      <div>
        {display}
      </div>
    )
  }
}

export default CommentForm;
