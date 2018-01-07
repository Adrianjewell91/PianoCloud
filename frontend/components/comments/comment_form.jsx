import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {body: "", parent_id: this.props.parentId}
  }

  handleSubmit (e) {
    e.preventDefault();

    document.getElementById('submit-comment').blur()

    if (this.state.body === "") {
      alert("You must provide some content");
    } else {
      this.props.createComment(this.state, this.props.trackId)
      .then(() => this.setState({body: ""}));
    }

    document.querySelectorAll('input').forEach((el) => el.value = "");
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
        <div className="comment-form">
          <div className="comment-form-pic-frame">
              <img className="comment-form-pic"
                   src={this.props.currentUser.thumb_nail_url}/>
          </div>

          <form onSubmit={this.handleSubmit.bind(this)}>
            <input id="submit-comment" type="text"
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
