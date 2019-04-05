# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
User.destroy_all
Video.destroy_all
demo = User.create!(username: "DemoUser", email:"demo@gmail.com", password: "password")
user_2 = User.create!(username: "movieLover", email:"movielover@gmail.com", password: "password")

v1 = Video.create!(title:"spiderman homecoming trailer",user_id: user_2.id, url:"www.spiderman.com") 
v2 = Video.create!(title:"Captain Marvel Trailer",user_id: user_2.id, url:"www.captainmarvel.com") 
v3 = Video.create!(title:"Avengers End Game Trailer (2019)",user_id: user_2.id, url:"www.avengersendgame.com") 
v4 = Video.create!(title:"US -trailer (2019)",user_id: user_2.id, url:"www.us.com")
v5 = Video.create!(title:"Annabelle comes home trailer(2019)",user_id: user_2.id, url:"www.annabellecomeshome.com")

v1.video.attach(io: open("https://s3.amazonaws.com/autube-dev/cFoqHSePK2PBZ9paYkYxfiWw"), filename: "spidermanhomecomingtrailer.mp4")
v2.video.attach(io: open("https://s3.amazonaws.com/autube-dev/7Arym9cbHusF2WX2Bgm7UbZv"), filename: "captainmarvel.mp4")
v3.video.attach(io: open("https://s3.amazonaws.com/autube-dev/JUvr54VZT8Pch6tqk2E98Me4"), filename: "avengersendgametrailer.mp4")
v4.video.attach(io: open("https://s3.amazonaws.com/autube-dev/h4AuQf1bs27cMgt21zw27QPb"), filename: "us-trailer.mp4")
v5.video.attach(io: open("https://s3.amazonaws.com/autube-dev/KEa2kibFCGZvXqf9N3AYzkqw"), filename: "annabelle-comes-home.mp4")

v1.image.attach(io: open("https://s3.amazonaws.com/autube-dev/ApYVxjmqrvcjBEmjDuEWZ7c1"), filename: "spidermanhome.png")
v2.image.attach(io: open("https://s3.amazonaws.com/autube-dev/oNe71kdpPb1ykFv8YzbiWAQi"), filename: "captainmarvel.jpg")
v3.image.attach(io: open("https://s3.amazonaws.com/autube-dev/g5ZbYPdch2zyETssiJgq1Jg3"), filename: "avengersendgame.png")
v4.image.attach(io: open("https://s3.amazonaws.com/autube-dev/KbXJybq6RdNmHtgnDwabakPM"), filename: "us.jpg")
v5.image.attach(io: open("https://s3.amazonaws.com/autube-dev/ibBZ3CoiAs3o5kejYQLKs9TR"), filename: "annabelle_thumbnail.jpg")
