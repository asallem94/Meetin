# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "destroy interest categories"
Interest.destroy_all
User.destroy_all
puts "create interests"
interests = [
  'Outdoor & Adventure',
   'Tech',
    'Family',
     'Health & Wellness',
      'Sports & Fitness',
       'Learning',
        'Photography',
         'Food & Drink',
          'Writing',
           'Language & Culture',
            'Music',
             'Movemets',
              'LGBTQ',
               'Film',
                'Sci-Fi & Games',
                 'Beliefs',
                  'Arts',
                   'Book Clubs',
                    'Dance',
                     'Pets',
                      'Hobbies & Crafts',
                       'Fashion & Beauty',
                        'Social',
                         'Career & Business'
]

interestsPhotoURLS = [
  'https://secure.meetupstatic.com/photos/event/2/e/a/7/600_450131943.jpeg',
  'https://secure.meetupstatic.com/photos/event/2/e/a/d/600_450131949.jpeg',
  'https://secure.meetupstatic.com/photos/event/2/e/9/c/600_450131932.jpeg',
  'https://secure.meetupstatic.com/photos/event/2/e/a/e/600_450131950.jpeg',
  'https://secure.meetupstatic.com/photos/event/2/e/a/c/600_450131948.jpeg',
  'https://secure.meetupstatic.com/photos/event/2/e/9/b/600_450131931.jpeg',
  'https://secure.meetupstatic.com/photos/event/2/e/a/a/600_450131946.jpeg',
  'https://secure.meetupstatic.com/photos/event/2/e/a/1/600_450131937.jpeg',
  'https://secure.meetupstatic.com/photos/event/2/e/a/f/600_450131951.jpeg',
  'https://secure.meetupstatic.com/photos/event/2/e/a/3/600_450131939.jpeg',
  'https://secure.meetupstatic.com/photos/event/2/e/a/6/600_450131942.jpeg',
  'https://secure.meetupstatic.com/photos/event/2/e/a/5/600_450131941.jpeg',
  'https://secure.meetupstatic.com/photos/event/2/e/a/4/600_450131940.jpeg',
  'https://secure.meetupstatic.com/photos/event/4/8/3/f/600_450858495.jpeg',
  'https://secure.meetupstatic.com/photos/event/2/e/a/2/600_450131938.jpeg',
  'https://secure.meetupstatic.com/photos/event/2/e/9/5/600_450131925.jpeg',
  'https://secure.meetupstatic.com/photos/event/2/e/8/8/600_450131912.jpeg',
  'https://secure.meetupstatic.com/photos/event/2/e/9/6/600_450131926.jpeg',
  'https://secure.meetupstatic.com/photos/event/2/e/9/a/600_450131930.jpeg',
  'https://secure.meetupstatic.com/photos/event/2/e/a/9/600_450131945.jpeg',
  'https://secure.meetupstatic.com/photos/event/2/e/9/9/600_450131929.jpeg',
  'https://secure.meetupstatic.com/photos/event/2/e/9/e/600_450131934.jpeg',
  'https://secure.meetupstatic.com/photos/event/2/e/a/b/600_450131947.jpeg',
  'https://secure.meetupstatic.com/photos/event/2/e/9/7/600_450131927.jpeg'
]

interests.each.with_index do |interest, indx|
  Interest.create!(topic_titles: interest, picture_url: interestsPhotoURLS[indx])
end

puts "destroying users"
User.destroy_all
puts "creating users"

u1 = User.create!(
  name: "Sallem Ahmed",
  password: "123123",
  email: "test1@gmail.com",
  profile_img_url: "https://media.licdn.com/dms/image/C4E03AQEBtsM5AW83wA/profile-displayphoto-shrink_800_800/0?e=1547683200&v=beta&t=72gP60VElKlgq6kVtlu_QkXBTiKz4sWKGIHhdXScs6E",
  bio: "I am trying to get to know more people in the tech industry and build my knowledge through the network I create",
  lat: 40.699512,
  lng: -73.804964
)
u2 = User.create!(
  name: "Simcha Cohen",
  password: "123123",
  email: "test2@gmail.com",
  profile_img_url: "https://secure.gravatar.com/avatar/d762b266d546dd1bd32ea9f56828f7d8?secure=true&size=300",
  bio: "Tech is a great industry to explore creativity and passion",
  lat: 40.629956,
  lng: -74.010143
)
u3 = User.create!(
  name: "Mashu Duek",
  password: "123123",
  email: "test3@gmail.com",
  profile_img_url: "https://secure.gravatar.com/avatar/50b8ca5b7e2c9368f40d81f5aba0914a?secure=true&size=300",
  bio: "I love creating websites and have been specializing in frontend applications with javascript",
  lat: 40.854685,
  lng: -73.907459
)
u4 = User.create!(
  name: "Demo User",
  password: "123123",
  email: "test4@gmail.com",
  profile_img_url: "https://pbs.twimg.com/profile_images/542526971373056000/rYcnP8zz_400x400.jpeg",
  bio: "I am not real, but I am existant.  I am window watching the contents of this web application.  However I am enjoying this pleasant demo.",
  lat: 40.755293,
  lng: -74.003459
)

puts "destroying groups"
Group.destroy_all
puts "creating groups"

aA = Group.new(
  organizer_id: u1.id,
  title: "App Academy Study Group",
  img_url: "https://www.cs.helsinki.fi/webfm_send/1831",
  city: "New York",
  description: "In this group we go discuss and learn about core concepts in computer science that gives us the knowledge to build modern websites.",
  lat: 40.755293,
  lng: -74.003459,
  private: false
)

fp = Group.create!(
  organizer_id: u2.id,
  title: "Picnic Party",
  img_url: "https://kid101.com/wp-content/uploads/2015/09/Apple-picking.jpg",
  city: "New Jersey",
  description: "lets find trees and pick fruits. we can pick apples from apple trees, grapes from vines and carrots from roots.",
  lat: 40.025156,
  lng: -74.647900,
  private: false
)

puts "destroying group memberships"
GroupMembership.destroy_all
puts "creating group Memberships"

GroupMembership.create(user_id: u2.id, group_id: aA.id)
GroupMembership.create(user_id: u3.id, group_id: aA.id)
GroupMembership.create(user_id: u4.id, group_id: fp.id)
