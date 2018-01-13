import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: ""}
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    }
  }

  handleSearch(e) {
    e.preventDefault();
    this.props.requestSearchResults(this.state.query)
      .then(() => this.props.history.push(`/search`));
  }

  //Set up ternary logic to redirect to user profile if logged in.
  componentDidMount () {
    if (this.props.currentUser) {
      this.props.history.push(`/${this.props.currentUser.username}`);}
    else {
      document.getElementsByClassName("main-page")[0]
        .classList.add("greeting-background");
    }
  }

  componentWillUnmount() {
    document.getElementsByClassName("main-page")[0]
      .classList.remove("greeting-background");
  }

  render () {

    let search_input = (<form onSubmit={this.handleSearch.bind(this)}>
                              <input className="nav-search"
                                     onChange={this.update("query")}
                                     value={this.state.query}
                                     type="text"
                                     placeholder="Search Music Titles (ex. Aeolian)"></input>
                        </form>)

    return (
      <div className="splash">

       <h1>Listen On PianoCloud</h1>
       {search_input}
     </div>
    );
  }

}

export default Greeting;
