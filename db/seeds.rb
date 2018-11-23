# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

EventRsvp.destroy_all
GroupMembership.destroy_all
Event.destroy_all
Group.destroy_all
User.destroy_all
Interest.destroy_all
puts "destroyed tables"

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

puts "created interests"

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

puts "created users"

aA = Group.create!(
  organizer_id: u1.id,
  title: "App Academy Study Group",
  img_url: "https://www.cs.helsinki.fi/webfm_send/1831",
  city: "New York",
  description: "In this group we go discuss and learn about core concepts in computer science that gives us the knowledge to build modern websites.",
  lat: 40.755293,
  lng: -74.003459,
  private: false
)

pp = Group.create!(
  organizer_id: u2.id,
  title: "Picnic Party",
  img_url: "https://kid101.com/wp-content/uploads/2015/09/Apple-picking.jpg",
  city: "New Jersey",
  description: "lets find trees and pick fruits. we can pick apples from apple trees, grapes from vines and carrots from roots.",
  lat: 40.025156,
  lng: -74.647900,
  private: false
)
hg = Group.create!(
  organizer_id: u1.id,
  title: "Halo 5 Gaming",
  img_url: "https://content.halocdn.com/media/Default/channel/fall-of-reach/orion-thumbnail-542x305-2e0c31648bae4a279aacdffee63e2330.jpg",
  city: "New Jersey",
  description: "Halo: The Fall of Reach is an animated adaptation of the beloved Eric Nylund novel of the same name, and in many ways the origin story of the Master Chief and Blue Team. Told in three connected acts, the high-quality animated production is included with the Digital Deluxe Edition, Limited Edition and Limited Collector’s Edition of Halo 5: Guardians* and can be viewed via The Halo Channel with the launch of the game on October 27.",
  lat: 40.025156,
  lng: -74.647900,
  private: false
)

ss = Group.create!(
  organizer_id: u3.id,
  title: "Saturday Soccer",
  img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsXFt8YGF2NmXpdHMOwVOnQu0Tl0n2NFkyIzBnGXFO-erae0lX",
  city: "New Jersey",
  description: "Football, also called association football or soccer, game in which two teams of 11 players, using any part of their bodies except their hands and arms, try to maneuver the ball into the opposing team’s goal. Only the goalkeeper is permitted to handle the ball and may do so only within the penalty area surrounding the goal. The team that scores more goals wins.

Football is the world’s most popular ball game in numbers of participants and spectators. Simple in its principal rules and essential equipment, the sport can be played almost anywhere, from official football playing fields (pitches) to gymnasiums, streets, school playgrounds, parks, or beaches. Football’s governing body, the Fédération Internationale de Football Association (FIFA), estimated that at the turn of the 21st century there were approximately 250 million football players and over 1.3 billion people “interested” in football; in 2010 a combined television audience of more than 26 billion watched football’s premier tournament, the quadrennial month-long World Cup finals.",
  lat: 40.025156,
  lng: -74.647900,
  private: false
)

fg = Group.create!(
  organizer_id: u2.id,
  title: "Fixed Gear City Riders",
  img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz0WYn2YePUNcCZUeKeDLs3d6vUnR3zEZDjW2VcNbp-2uLtIXC",
  city: "New York",
  description: "There’s a point when a trend turns into a movement and movement turns into a way of life. In regards to the advancement of bike culture in major Chinese cities, a movement has begun. The influx of foreign and local led biking efforts across major Chinese cities is propelling both the customized (through the fixed gear scene) and the traditional bike culture movement forward into 2010 and beyond.",
  lat: 40.755295,
  lng: -74.003457,
  private: false
)



cl = Group.create!(
  organizer_id: u1.id,
  title: "Car Lovers",
  img_url: "https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/media/51/2017-10best-lead-photo-672628-s-original.jpg?crop=1xw:1xh;center,top&resize=800:*",
  city: "New York",
  description: "If you search for the meaning of community, you’ll find the definition as people who share common interests. That’s why the universe has cooking clubs, football fanatics and Game Of Thrones diehards. But to us petrolheads, cars are so much more than a simply defined ‘interest’. We are defined by a passion that infiltratres our lives on a much deeper level.

And so the stronger the passion, the tighter a community will be, and you’ll find this solidarity by the bucketload in the automotive scene. When we’re not out driving our cars, we’re socialising online with fellow car enthusiasts and subconsciously consuming any car facts and figures we can get our minds on.",
  lat: 40.755291,
  lng: -74.003452,
  private: false
)


gt = Group.create!(
  organizer_id: u1.id,
  title: "Game of Thrones Fan Club",
  img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSbEUBccfYh9ThdEHbpPAUxTEK49uHg_UhFGzKmuExYrXWx6BLVg",
  city: "New York",
  description: "Years after a rebellion spurred by a stolen bride to be and the blind ambitions of a mad king, Robert of the house Baratheon sits on the much desired Iron Throne. In the mythical land of Westeros, nine noble families fight for every inch of control and every drop of power. The King's Hand, Jon Arryn, is dead. And Robert seeks out his only other ally in all of Westeros, his childhood friend Eddard Stark. The solemn and honorable Warden of the North is tasked to depart his frozen sanctuary and join the King in the capital of King's Landing to help the now overweight and drunk Robert rule. However, a letter in the dead of night informs Ned that the former Hand was murdered, and that Robert will be next. So noble Ned goes against his better desires in an attempt to save his friend and the kingdoms. But political intrigue, plots, murders, and sexual desires lead to a secret that could tear the Seven Kingdoms apart. And soon Eddard will find out what happens when you play the Game of Thrones.",
  lat: 40.755299,
  lng: -74.003451,
  private: false
)


id = Group.create!(
  organizer_id: u4.id,
  title: "Interior Decore",
  img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR26i8sbgYaV8n3xSoHfUw9_1NYSHbQc5qk-hN5Iy8Vs1A1QtTrRA
",
  city: "New York",
  description: "Interior designers work closely with architects, structural engineers, mechanical engineers, and builders, to determine how interior spaces will function, look, and be furnished. Interior designers read blueprints and must be aware of building codes and inspection regulations.
Although some sketches or drawings may be freehand, most interior designers use computer-aided design (CAD) software for the majority of their drawings.


Many designers specialize in a particular type of building (home, hospital, or hotel), a specific room (bathroom or kitchen), or a specific style. Some designers work for home furnishings stores, providing design services to help customers choose materials and furnishings.",
  lat: 40.755296,
  lng: -74.003453,
  private: false
)


we = Group.create!(
  organizer_id: u4.id,
  title: "Welding Experts",
  img_url: "https://www.butlertech.org/wp-content/uploads/2017/06/Welding.jpg",
  city: "New York",
  description: "Welders fabricate and assemble metal structures and equipment through the use of welders, cutters, shapers and measuring tools. Welders produce metal products according to customer or employer specifications. They use multiple welding machines to repair and maintain metal equipment and structures of various sizes.",
  lat: 40.755292,
  lng: -74.003454,
  private: false
)



llg = Group.create!(
  organizer_id: u3.id,
  title: "League of Legends Gaming",
  img_url: "https://cyberbullying.org/wp-content/uploads/2016/10/league-of-legends-wallpaper-e1478011147165.jpg",
  city: "New York",
  description: "League of Legends is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements. Two teams of powerful champions, each with a unique design and playstyle, battle head-to-head across multiple battlefields and game modes.",
  lat: 40.755296,
  lng: -74.003454,
  private: false
)

puts "created groups"

GroupMembership.create!(user_id: u2.id, group_id: aA.id)
GroupMembership.create!(user_id: u3.id, group_id: aA.id)
GroupMembership.create!(user_id: u4.id, group_id: pp.id)

puts "created group memberships"

e1 = Event.create!(
  host_id: u3.id,
  group_id: ss.id,
  title: "Saturday for the Boys",
  event_img_url: "https://www.canalsidebuffalo.com/wp-content/uploads/2016/05/780x410.jpg",
  address: "92 Hudson River Greenway, New York, NY 10014",
  city: "New York",
  detail: "In Bubble Ball, players wear inflatable bubble suits that allow them to safely bounce off one another and roll over completely. You can play games like Bubble Soccer, Capture the Flag and Bubble Football. BubbleBall is perfect for birthday​s, company picnics, school events, and much more. This is your chance to become a human bubble!",
  lat: 40.729253,
  lng: -74.011589,
  start_date: Time.utc(2018, 11, 8, 9, 10),
  end_date: Time.utc(2018, 12, 8, 9, 10),
  private: false,
  price: 350.00
)
e7 = Event.create!(
  host_id: u3.id,
  group_id: ss.id,
  title: "Fifa time",
  event_img_url: "https://www.canalsidebuffalo.com/wp-content/uploads/2016/05/780x410.jpg",
  address: "92 Hudson River Greenway, New York, NY 10014",
  city: "New York",
  detail: "In Bubble Ball, players wear inflatable bubble suits that allow them to safely bounce off one another and roll over completely. You can play games like Bubble Soccer, Capture the Flag and Bubble Football. BubbleBall is perfect for birthday​s, company picnics, school events, and much more. This is your chance to become a human bubble!",
  lat: 40.729252,
  lng: -74.011589,
  start_date: Time.utc(2018, 11, 22, 8, 10),
  end_date: Time.utc(2018, 11, 22, 9, 10),
  private: false,
  price: 25.00
)

e2 = Event.create!(
  host_id: u3.id,
  group_id: hg.id,
  title: "Halo 1",
  event_img_url: "https://www.canalsidebuffalo.com/wp-content/uploads/2016/05/780x410.jpg",
  address: "92 Hudson River Greenway, New York, NY 10014",
  city: "New York",
  detail: "In Bubble Ball, players wear inflatable bubble suits that allow them to safely bounce off one another and roll over completely. You can play games like Bubble Soccer, Capture the Flag and Bubble Football. BubbleBall is perfect for birthday​s, company picnics, school events, and much more. This is your chance to become a human bubble!",
  lat: 40.729254,
  lng: -74.011586,
  start_date: Time.utc(2018, 11, 26, 7, 10),
  end_date: Time.utc(2018, 11, 26, 9, 10),
  private: false,
  price: 0.00
)
e3 = Event.create!(
  host_id: u3.id,
  group_id: hg.id,
  title: "Halo 2",
  event_img_url: "https://www.canalsidebuffalo.com/wp-content/uploads/2016/05/780x410.jpg",
  address: "92 Hudson River Greenway, New York, NY 10014",
  city: "New York",
  detail: "In Bubble Ball, players wear inflatable bubble suits that allow them to safely bounce off one another and roll over completely. You can play games like Bubble Soccer, Capture the Flag and Bubble Football. BubbleBall is perfect for birthday​s, company picnics, school events, and much more. This is your chance to become a human bubble!",
  lat: 40.729258,
  lng: -74.011582,
  start_date: Time.utc(2018, 11, 23, 4, 10),
  end_date: Time.utc(2018, 11, 23, 9, 10),
  private: false,
  price: 0.00
)
e4 = Event.create!(
  host_id: u3.id,
  group_id: hg.id,
  title: "Halo 3",
  event_img_url: "https://www.canalsidebuffalo.com/wp-content/uploads/2016/05/780x410.jpg",
  address: "92 Hudson River Greenway, New York, NY 10014",
  city: "New York",
  detail: "In Bubble Ball, players wear inflatable bubble suits that allow them to safely bounce off one another and roll over completely. You can play games like Bubble Soccer, Capture the Flag and Bubble Football. BubbleBall is perfect for birthday​s, company picnics, school events, and much more. This is your chance to become a human bubble!",
  lat: 40.729251,
  lng: -74.011585,
  start_date: Time.utc(2018, 11, 25, 4, 10),
  end_date: Time.utc(2018, 11, 25, 9, 10),
  private: false,
  price: 0.00
)
e5 = Event.create!(
  host_id: u3.id,
  group_id: hg.id,
  title: "Halo 4",
  event_img_url: "https://www.canalsidebuffalo.com/wp-content/uploads/2016/05/780x410.jpg",
  address: "92 Hudson River Greenway, New York, NY 10014",
  city: "New York",
  detail: "In Bubble Ball, players wear inflatable bubble suits that allow them to safely bounce off one another and roll over completely. You can play games like Bubble Soccer, Capture the Flag and Bubble Football. BubbleBall is perfect for birthday​s, company picnics, school events, and much more. This is your chance to become a human bubble!",
  lat: 40.729253,
  lng: -74.011589,
  start_date: Time.utc(2018, 11, 27, 4, 10),
  end_date: Time.utc(2018, 11, 27, 9, 10),
  private: false,
  price: 0.00
)
e6 = Event.create!(
  host_id: u3.id,
  group_id: hg.id,
  title: "Halo 5",
  event_img_url: "https://www.canalsidebuffalo.com/wp-content/uploads/2016/05/780x410.jpg",
  address: "92 Hudson River Greenway, New York, NY 10014",
  city: "New York",
  detail: "In Bubble Ball, players wear inflatable bubble suits that allow them to safely bounce off one another and roll over completely. You can play games like Bubble Soccer, Capture the Flag and Bubble Football. BubbleBall is perfect for birthday​s, company picnics, school events, and much more. This is your chance to become a human bubble!",
  lat: 40.729256,
  lng: -74.011584,
  start_date: Time.utc(2018, 11, 22, 4, 10),
  end_date: Time.utc(2018, 11, 22, 9, 10),
  private: false,
  price: 0.00
)

puts "created events"

EventRsvp.create!(user_id: u1.id, event_id: e1.id, rsvp: true)
EventRsvp.create!(user_id: u2.id, event_id: e1.id, rsvp: false)
EventRsvp.create!(user_id: u3.id, event_id: e1.id, rsvp: true)

puts "created rsvps"


puts "creating nader seeds"

e50 = Event.create!(
  host_id: u2.id,
  group_id: fg.id,
  title: "Race in Times Square",
  event_img_url: "http://www.wheeltalkfixed.com/wp-content/uploads/2018/03/WheelTalk_FixedGearPortland_ThisIsASign-8236-810x540.jpg",
  address: "Manhattan, NY 10036",
  city: "New York",
  detail: "Be the fastest rider to go from start to finish while dodging car people and other riders in the most busiest city in the world! Come see if you can make it across the finish line alive and if you can be the first to do so.",
  lat: 40.729252,
  lng: -74.011586,
  start_date: Time.utc(2018, 11, 28, 9, 00),
  end_date: Time.utc(2018, 11, 28, 11, 00),
  private: false,
  price: 0
)

EventRsvp.create!(user_id: u1.id, event_id: e50.id, rsvp: true)
EventRsvp.create!(user_id: u2.id, event_id: e50.id, rsvp: true)
EventRsvp.create!(user_id: u3.id, event_id: e50.id, rsvp: true)


e51 = Event.create!(
  host_id: u2.id,
  group_id: fg.id,
  title: "Track Stand Competition",
  event_img_url: "http://static.wixstatic.com/media/40f2de_26f949ddb0f9de4eab67a49137386781.jpg_1024",
  address: "Brooklyn 11201",
  city: "New York",
  detail: "Balance you bike with out moving? Thats right, see if you can be the longest person stand with your bike with out moving.",
  lat: 40.729255,
  lng: -74.011588,
  start_date: Time.utc(2018, 12, 13, 12, 00),
  end_date: Time.utc(2018, 12, 13, 14, 00),
  private: false,
  price: 0
)

EventRsvp.create!(user_id: u1.id, event_id: e51.id, rsvp: true)
EventRsvp.create!(user_id: u2.id, event_id: e51.id, rsvp: true)
EventRsvp.create!(user_id: u3.id, event_id: e51.id, rsvp: false)



e52 = Event.create!(
  host_id: u2.id,
  group_id: fg.id,
  title: "Longest Skid Competition",
  event_img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6FP2nTFs6ktErzleDrT4zJPM4SSGjPlqrEaVVJoGqCi2vlpPK",
  address: "Brooklyn Williamsburg",
  city: "New York",
  detail: "How far can you skid? Come join us to see the longest skidding and all around good times. Share your bike and your experience of this awesome fixed gear life.",
  lat: 40.729259,
  lng: -74.011584,
  start_date: Time.utc(2018, 12, 20, 14, 00),
  end_date: Time.utc(2018, 12, 20, 16, 00),
  private: false,
  price: 0
)

EventRsvp.create!(user_id: u1.id, event_id: e52.id, rsvp: true)
EventRsvp.create!(user_id: u2.id, event_id: e52.id, rsvp: true)
EventRsvp.create!(user_id: u3.id, event_id: e52.id, rsvp: false)







e53 = Event.create!(
  host_id: u1.id,
  group_id: cl.id,
  title: "Imports only",
  event_img_url: "https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/r35/2_minor_change/overview/18tdi-gtrhelios101.jpg.ximg.s_12_h.smart.jpg",
  address: "Astoria NY 1103",
  city: "New York",
  detail: "Come share your foreign car and share your experience of the journey these overseas cars made. Show domestic cars how its done from afar.",
  lat: 40.729251,
  lng: -74.011584,
  start_date: Time.utc(2018, 11, 30, 16, 00),
  end_date: Time.utc(2018, 11, 30, 19, 00),
  private: false,
  price: 0
)

EventRsvp.create!(user_id: u1.id, event_id: e53.id, rsvp: true)
EventRsvp.create!(user_id: u2.id, event_id: e53.id, rsvp: true)
EventRsvp.create!(user_id: u3.id, event_id: e53.id, rsvp: true)




e54 = Event.create!(
  host_id: u1.id,
  group_id: cl.id,
  title: "Drift Day!",
  event_img_url: "http://historylocker.com/wp-content/uploads/2017/07/drift-as-popular-as-formula-one.jpg3_.png",
  address: "99 Caven Point Rd, Jersey City, NJ 07305",
  city: "New Jersey",
  detail: "Break those tires loose! Bring your car and have fun. Pop some donuts or make a classy figure 8. Decreased price courtesy of RPM Racing Track.",
  lat: 40.729251,
  lng: -74.011584,
  start_date: Time.utc(2018, 12, 15, 8, 00),
  end_date: Time.utc(2018, 12, 15, 16, 00),
  private: false,
  price: 240
)

EventRsvp.create!(user_id: u1.id, event_id: e54.id, rsvp: false)
EventRsvp.create!(user_id: u2.id, event_id: e54.id, rsvp: true)
EventRsvp.create!(user_id: u3.id, event_id: e54.id, rsvp: true)



e55 = Event.create!(
  host_id: u1.id,
  group_id: cl.id,
  title: "Drag Race!",
  event_img_url: "https://www.nhra.com/sites/default/files/styles/news_gallery_big_image_920x518/public/2017-11/lucas.jpg?itok=ezFgOSg9",
  address: "99 Caven Point Rd, Jersey City, NJ 07305",
  city: "New Jersey",
  detail: "Just you and the clock. Straight road and straight power. How much can you put down to get to the finish line the fastest?",
  lat: 40.729253,
  lng: -74.011587,
  start_date: Time.utc(2018, 12, 30, 8, 00),
  end_date: Time.utc(2018, 12, 30, 16, 00),
  private: false,
  price: 160
)

EventRsvp.create!(user_id: u1.id, event_id: e55.id, rsvp: false)
EventRsvp.create!(user_id: u2.id, event_id: e55.id, rsvp: true)
EventRsvp.create!(user_id: u3.id, event_id: e55.id, rsvp: true)

puts "finished"
