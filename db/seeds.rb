# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo = User.create!(username: "DemoUser", email:"demo@gmail.com", password: "password")
user_2 = User.create!(username: "movieLover", email:"movielover@gmail.com", password: "password")

# v1 = Video.create!(title: ,user_id: , url:,) 
# v2 = Video.create!(title: ,user_id: , url:,) 
# v3 = Video.create!(title: ,user_id: , url:,) 
# v4 = Video.create!(title: ,user_id: , url:,)
# v5 = Video.create!(title: ,user_id: , url:,)


