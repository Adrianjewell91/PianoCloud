import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {body: "", parent_id: this.props.parentId};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.revealForm = this.revealForm.bind(this);
  }

  revealForm() {
    this.formBox.classList.toggle('hidden');
    this.revealButton.classList.toggle('selected');
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
    this.revealForm();
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
        <div className="comment-form hidden" ref={(formBox) => {this.formBox = formBox}}>
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
        <button ref={(revealButton) => {this.revealButton = revealButton}}
                onClick={this.revealForm}>
                {this.props.replyName}
        </button>

        {display}
      </div>
    )
  }
}

export default CommentForm;
