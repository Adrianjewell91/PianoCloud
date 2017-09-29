# PianoCloud

## Stream and share music on PianoCloud.

http://pianocloud.herokuapp.com

## Technologies
PianoCloud's framework is a Rails backend and a React/Redux frontend. The backend is structured on the concept of the MVC (Model-View-Controller), while the frontend is organized according to principles of Flux.

Additionally, sound and image files are hosted on AWS S3 Simple Storage. the Paperclip Gem links files on AWS to database entries in the database.  

Supplementary technologies include $.ajax requests from JQuery, and JBuilder for passing JSON to the frontend.

## Features:

1. [Comprehensive Navigation Bar.](#nav)

2. Authentication.

3. Image/Sound Uploading.

4. Asynchronous Streaming.

5. Interconnected pages.

6. Comments.

## Feature Highlights:

### <a name="nav"></a>Comprehensive Navigation Bar.

The PianoCloud Navigation Bar is modeled closely after SoundCloud's. Nested 'div' elements and flex-box styling make it screen-responsive.

### <a name="auth"></a>Authentication.

Authentication offers the 'Demo Sign-In', 'Regular Sign-In,' and 'Create Account' option. Customization options are available on current-user's profile page.

React Modals provide the architecture for both the session forms and the edit forms.

### <a name="upload"></a>Image/Sound Uploading.

As stated in the Technologies section, Amazon AWS S3 is the file hosting service for PianoCloud. Configuring PaperClip required loading the correct version( 2.10 for aws-sdk, and 5.0.0 for PaperClip). Removing the spoofing protection was also necessary to allow music uploads. This is a bug in paperclip that is, as far as the author know, currently unfixed.

The default method is HTTPS (to please heroku), and Figaro is used to hide access keys from the public repo.

### <a name="stream"></a>Streaming Functionality.

PianoCloud's streaming functionality is asynchronous with page navigation.

Additionally, pages are sensitive to the currently playing song. For example, pressing the "play" button on a track will persist that information to any other page in the application. A track can also be paused and restarted from anywhere in the app.  This is achieved with CSS class manipulation and vanilla javascript.

Automatically playing the next track occurs when the audio player calls a redux cycle to pop a track off the stack and load the next one.

### <a name="pages"></a>Fully interconnected user pages, track pages, streaming and search.

User, Track, Stream, and Search Pages are interconnected in two ways. The first is by way of anchor linkage. Any appearance of an artist name or track title links to the respective show page.  Additionally, it is possible to navigate to any show page, not only from any index page, but form any other show page.  Attention to the component lifecycle allows this to be possible.

The second form of interconnectedness allows for only the relevant information displayed on any given page. This was accomplished with careful attention to reducer logic and state shape, of which this particular implementation is perhaps the most direct. At any given time, the page could be showing any number of users or tracks. To handle the multiple ways of presenting information, tracks and users were filtered with reducer logic.

### <a name="comments"></a>Comments.

Users can comment on tracks if they are logged in. They can also delete the comments of which they are the author.

# Discussion of Challenges

### URL Routing

Querying by song title allows for the URL routing by artist names and track titles (i.e. /:artist_name/:track_title). This is a challenge because $.ajax replaces ' ' with '%20'. The solution is to parse the query in the Track model with rails gSUB!.  

### N+1 Queries
Because tracks and users are so closely linked, opportunities for N+1 queries are abundant. The way to remove the N+1 query is to call #includes() in the Controller queries, and, when appropriate, pass associations as variables into JBuilder partials. If the associations are not passed, then JBuilder would make the query again, and result would be an n+1 query.


### Future Implementation Plans:

1. Image and Sound File Manipulation after uploading.
2. Comprehensive Search.
3. Playlists and more audio-player buttons.
