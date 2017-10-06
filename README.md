# PianoCloud

## Stream and share music on PianoCloud.

http://pianocloud.herokuapp.com

## Technologies
PianoCloud's uses a Rails back-end and a React/Redux front-end. The MVC (Model-View-Controller) dictates the architecture of the back-end, while the frontend organizes information according to principles of Flux.

Sound and image files are hosted with AWS S3 Simple Storage, and the Paperclip Gem links files to database entries.

Other technologies include React Router, vanilla javascript, SQL/ActiveRecord, $.ajax requests, and JBuilder.

## Features:

1. [Comprehensive Navigation Bar.](#nav)

2. [Authentication.](#auth)

3. [Image/Sound Uploading.](#upload)

4. [Asynchronous Streaming.](#stream)

5. [Interconnected pages.](#pages)

6. [Comments.](#comments)

## Feature Highlights:

### <a name="nav"></a>Comprehensive Navigation Bar.

SoundCloud provided the model for PianoCloud's navigation bar. Nested 'div' elements and flex-box styling make the navigation bar screen-responsive.

### <a name="auth"></a>Authentication.

Authentication offers the 'Demo Sign-In', 'Regular Sign-In,' and 'Create Account' option. Customization options are available on the current user's profile page.

React Modals provide the skeleton for the 'session' and 'edit profile' forms.

### <a name="upload"></a>Image/Sound Uploading.

Amazon AWS S3 is the hosting service for PianoCloud. Configuring PaperClip requires the correct versions (2.10 for aws-sdk, and 5.0.0 for PaperClip). Removing spoof protection is also necessary to allow music uploads. This is a bug that is currently unfixed.

The default method is HTTPS, and Figaro is used to hide access keys.

### <a name="stream"></a>Streaming.

PianoCloud's streaming functionality is asynchronous with page navigation. The play-bar also displays the current track information.

Pages are sensitive to the current song. For example, pressing the "play" button on a track will persist that information to any other page in the application. A track can also be paused and restarted from anywhere in the app.  This is achieved with CSS #id manipulation and vanilla javascript.

<img height="450px" width="350px" src="https://github.com/Adrianjewell91/PianoCloud/blob/master/FSP/button-persistence1.png"/>

```javascript
handlePlay (e) {
  let playButton = document.getElementById('playing');
  if (playButton) {playButton.textContent = "||";}
}
```


### <a name="pages"></a>Interconnected user pages, track pages, streaming and search.

User, Track, Stream, and Search Pages are interconnected in two ways.

The first is anchor linkage. Artist names and track titles link to their respective show pages.  It is possible to visit any page from any other page. Component lifecycle methods are responsible to handling the technicalities of this functionality.

```javascript
componentWillReceiveProps(newProps) {
  if (newProps.match.params.user_name !==this.props.match.params.user_name) {
    newProps.requestUser(newProps.match.params.user_name)
            .then((res) => this.props.requestUserTracks(res.user.id));
  }
}
```

Interconnectedness challenges the app to display the correct tracks and users on any given page. At any given time, the page could be showing any number of things, but the user should only see those that which is relevant. To ensure this, reducer logic and state shape must be handled carefully.

### <a name="comments"></a>Comments.

Users can comment on tracks if they are logged in. They can also delete the comments that they have authored.

# Discussion of Challenges

### URL Routing

Querying by song title allows for the URL routing by artist names and track titles (i.e. /:artist_name/:track_title). This is a challenge because $.ajax replaces ' ' with '%20'. The solution is to parse the query in the Track model with rails gSUB!.  

```ruby
params[:id].gsub! '%20', ' '

@track = Track.includes(:artist).find_by(title: params[:id])
```


### N+1 Queries
Because tracks and users are so closely linked, opportunities for N+1 queries are abundant. The way to remove the N+1 query is to call #includes() in the Controller queries, and, when appropriate, pass associations as variables into JBuilder partials. If the associations are not passed, then JBuilder would make the query again, and result would be an n+1 query.

```ruby
@tracks = Track.includes(:artist).where(user_id: params[:user_id])
```

### Future Implementation Plans:

1. Image and Sound File Manipulation after uploading.
2. Comprehensive Search.
3. Playlists.
