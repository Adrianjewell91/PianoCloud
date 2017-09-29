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
            name: "Frederic Chopin", location: "Paris, France")

user2 = User.create(username: 'fliszt',
            password: '123456',
            name: "Franz Liszt", location: "Weimar, Germany")

user3 = User.create(username: 'lvbeethoven',
            password: '123456',
            name: "Frederic Chopin",, location: "Bonn, Germany")

user4 = User.create(username: 'fschubert',
            password: '123456',
            name: "Frederic Chopin",, location: "Mission, San Francisco")

user5 = User.create(username: 'adriantest',
            password: '123456',
            name: "Adrian", location: "Boston, Massachusetts")


track1 = Track.create(title: "Un Sospiro")
track2 = Track.create(title: "Aeolian Harp")
track3 = Track.create(title: "Impromptu in g flat")
# track4 = Track.create(title: "")
# track5 = Track.create(title:)
# track6 = Track.create(title:)
# track7 = Track.create(title:)
# track8 = Track.create(title:)
# track9 = Track.create(title:)
# track10 = Track.create(title:)
