# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Track.destroy_all
Comment.destroy_all


user1 = User.create(username: 'fchopin',
            password: '123456',
            name: "Frederic Chopin", location: "Paris, France",
            thumb_nail: open("https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/chopin.png"))

user2 = User.create(username: 'fliszt',
            password: '123456',
            name: "Franz Liszt", location: "Weimar, Germany",
            thumb_nail: open("https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/56242280-portrait-of-the-composer-and-musician-franz-liszt.jpg"))

user3 = User.create(username: 'lvbeethoven',
            password: '123456',
            name: "Ludwig van Beethoven", location: "Bonn, Germany",
            thumb_nail: open("https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/beethoven.png"))

user4 = User.create(username: 'fschubert',
            password: '123456',
            name: "Franz Schubert", location: "Mission, San Francisco",
            thumb_nail: open("https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/schubert.jpg"))

user5 = User.create(username: 'adriantest',
            password: '123456',
            name: "Adrian", location: "Boston, Massachusetts", email: "adrianjewell91@gmail.com",
            thumb_nail: open("https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/Adrian_Jewell_1.jpg"))



track1 = Track.create(title: "Un Sospiro",  user_id: user2.id,
                      track_recording: open("https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/01-Un-Sospiro-Franz-Liszt.mp3"),
                      track_thumb_nail: open("https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/dawn-190055_640.jpg"))
track2 = Track.create(title: "Aeolian Harp", user_id: user1.id,
                      track_recording: open("https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/12-Aeolian-Harp-op-25-no.-1-Chopin.mp3"),
                      track_thumb_nail: open("https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/franz-winterhalter-89724_1280.jpg"))
track3 = Track.create(title: "Impromptu in g flat", user_id: user4.id,
                      track_recording: open("https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/02-Impromptu-in-G-flat-major-D.-899.mp3"),
                      track_thumb_nail: open("https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/dawn-190055_640.jpg"))
track4 = Track.create(title: "Scherzo from Sonata Pastorale", user_id: user3.id,
                      track_recording: open("https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/08-Sonata-Op-28-Beethoven-Scherzo.mp3"),
                      track_thumb_nail: open("https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/piano-2436670__480.jpg"))
track5 = Track.create(title: "Rondo from Sonata Pastorale", user_id: user3.id,
                      track_recording: open("https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/09-Sonata-Op.-28-Beethoven-Rondo.mp3"),
                      track_thumb_nail: open("https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/piano-2436670__480.jpg"))
track6 = Track.create(title: "Farewell", user_id: user5.id,
                      track_recording: open("https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/14-Forest-Scenes-Farewell.mp3"),
                      track_thumb_nail: open("https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/franz-winterhalter-89724_1280.jpg"))
track7 = Track.create(title: "The Prophet Bird", user_id: user5.id,
                      track_recording: open("https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/06-Forest-Scenes-Bird-as-Prophet.mp3"),
                      track_thumb_nail: open("https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/octagonal-pavilion-1148883_640.jpg"))
track8 = Track.create(title: "Nocturne in F minor", user_id: user1.id,
                      track_recording: open("https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/10-Chopin-Nocturne-Op.-55-no.-1.mp3"),
                      track_thumb_nail: open("https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/octagonal-pavilion-1148883_640.jpg"))
track9 = Track.create(title: "L'isle Joyeuse", user_id: user5.id,
                      track_recording: open("https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/07-L_isle-Joyeuse-Claude-Debussy.mp3"),
                      track_thumb_nail: open("https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/franz-winterhalter-89724_1280.jpg"))
track10 = Track.create(title: "Prelude and First Valse", user_id: user2.id,
                      track_recording: open("https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/03-Prelude-and-First-Valse-Enrique-Granados.mp3"),
                      track_thumb_nail: open("https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/dawn-190055_640.jpg"))



comment1 = Comment.create(body: "Wonderful", user_id: user1.id, parent_id: nil, track_id: track1.id)
comment2 = Comment.create(body: "Love it!", user_id: user2.id, parent_id: nil, track_id: track2.id)
comment3 = Comment.create(body: "Feels so Good!", user_id: user3.id, parent_id: nil, track_id: track3.id)
comment4 = Comment.create(body: "Awesome", user_id: user4.id, parent_id: nil, track_id: track4.id)
comment5 = Comment.create(body: "You're Great!", user_id: user5.id, parent_id: nil, track_id: track5.id)
comment6 = Comment.create(body: "Such exquisite music!", user_id: user1.id, parent_id: nil, track_id: track6.id)
comment7 = Comment.create(body: "Amazing", user_id: user2.id, parent_id: nil, track_id: track7.id)
comment8 = Comment.create(body: "Dazzling", user_id: user3.id, parent_id: nil, track_id: track8.id)
comment9 = Comment.create(body: "Brilliant", user_id: user4.id, parent_id: nil, track_id: track9.id)
comment10 = Comment.create(body: "Hmm, how interesting", user_id: user5.id, parent_id: nil, track_id: track10.id)
comment11 = Comment.create(body: "Thoughtful", user_id: user1.id, parent_id: nil, track_id: track1.id)
comment12= Comment.create(body: "Just great.", user_id: user2.id, parent_id: nil, track_id: track2.id)
comment13 = Comment.create(body: "A good listen", user_id: user3.id, parent_id: nil, track_id: track3.id)
comment14 = Comment.create(body: "Makes me feel so good", user_id: user4.id, parent_id: nil, track_id: track4.id)
comment15 = Comment.create(body: "Happy!", user_id: user5.id, parent_id: nil, track_id: track5.id)
comment16 = Comment.create(body: "Lovely", user_id: user1.id, parent_id: nil, track_id: track6.id)
comment17 = Comment.create(body: "So emotional", user_id: user2.id, parent_id: nil, track_id: track7.id)
comment18 = Comment.create(body: "The world is a beautiful place", user_id: user3.id, parent_id: nil, track_id: track8.id)
comment19 = Comment.create(body: "Let there be light!", user_id: user4.id, parent_id: nil, track_id: track9.id)
comment20 = Comment.create(body: "Very nice.", user_id: user5.id, parent_id: nil, track_id: track10.id)

comment21 = Comment.create(body: "I agree so strongly: Wonderful", user_id: user2.id, parent_id: comment1.id, track_id: track1.id)
comment22 = Comment.create(body: "I agree so strongly: Love it!", user_id: user3.id, parent_id: comment2.id, track_id: track2.id)
comment23 = Comment.create(body: "I agree so strongly: Feels so Good!", user_id: user4.id, parent_id: comment3.id, track_id: track3.id)
comment24 = Comment.create(body: "I agree so strongly: Awesome", user_id: user5.id, parent_id: comment4.id, track_id: track4.id)
comment25 = Comment.create(body: "I agree so strongly: You're Great!", user_id: user1.id, parent_id: comment5.id, track_id: track5.id)
comment26 = Comment.create(body: "I agree so strongly: Such exquisite music!", user_id: user2.id, parent_id: comment6.id, track_id: track6.id)
comment27 = Comment.create(body: "I agree so strongly: Amazing", user_id: user3.id, parent_id: comment7.id, track_id: track7.id)
comment28 = Comment.create(body: "I agree so strongly: Dazzling", user_id: user4.id, parent_id: comment8.id, track_id: track8.id)
comment29 = Comment.create(body: "I agree so strongly: Brilliant", user_id: user5.id, parent_id: comment9.id, track_id: track9.id)
comment30 = Comment.create(body: "I agree so strongly: Hmm, how interesting", user_id: user1.id, parent_id: comment10.id, track_id: track10.id)
comment31 = Comment.create(body: "I agree so strongly: Thoughtful", user_id: user2.id, parent_id: comment11.id, track_id: track1.id)
comment32= Comment.create(body: "I agree so strongly: Just great.", user_id: user3.id, parent_id: comment12.id, track_id: track2.id)
comment33 = Comment.create(body: "I agree so strongly: A good listen", user_id: user4.id, parent_id: comment13.id, track_id: track3.id)
comment34 = Comment.create(body: "I agree so strongly: Makes me feel so good", user_id: user5.id, parent_id: comment14.id, track_id: track4.id)
comment35 = Comment.create(body: "I agree so strongly: Happy!", user_id: user1.id, parent_id: comment15.id, track_id: track5.id)
comment36 = Comment.create(body: "I agree so strongly: Lovely", user_id: user2.id, parent_id: comment16.id, track_id: track6.id)
comment37 = Comment.create(body: "I agree so strongly: So emotional", user_id: user3.id, parent_id: comment17.id, track_id: track7.id)
comment38 = Comment.create(body: "I agree so strongly: The world is a beautiful place", user_id: user4.id, parent_id: comment18.id, track_id: track8.id)
comment39 = Comment.create(body: "I agree so strongly: Let there be light!", user_id: user5.id, parent_id: comment19.id, track_id: track9.id)
comment40 = Comment.create(body: "I agree so strongly: Very nice.", user_id: user1.id, parent_id: comment20.id, track_id: track10.id)
