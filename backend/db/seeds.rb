# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Tick.destroy_all
Climb.destroy_all 
Location.destroy_all 

orange = Climb.create name: "Everything Rhymes With Orange", grade: "5.9", star_rating: 3, style: "Lead", date: "2020-03-07", notes: "Hung once. Fun roof right below the anchors."
july = Climb.create name: "5th of July", grade: "5.9", star_rating: 3, style: "Lead", date: "2020-03-07", notes: "Hung once. Escape left around difficult 5th bolt, or traverse right on side pull."
ace = Climb.create name: "Ace in the Hole", grade: "5.10a", star_rating: 2, style: "TR", date: "2020-03-07", notes: "Small friciton feet, dangerous start up rock parallel to main arete."
highe = Climb.create name: "High Exposure", grade: "5.6", star_rating: 4, style: "Follow", date: "2019-09-08", notes: "Mega classic for a reason. Glorious first pitch to a famous ledge. Committing move out of the roof to 200ft of air. Pumpy face climbing to finish."
adair = Climb.create name: "Adair By The Sea", grade: "5.10c", star_rating: 4, style: "TR", date: "2019-10-06", notes: "Thanks, Lynn! Ultra fun strong crack climbing. Scenic as it gets."

ccc = Location.create state: "Colorado", crag: "Clear Creek Canyon"
gunks = Location.create state: "New York", crag: "The Gunks"
acadia = Location.create state: "Maine", crag: "Acadia National Park"

Tick.create climb: orange, location: ccc 
Tick.create climb: july, location: ccc 
Tick.create climb: ace, location: ccc 
Tick.create climb: highe, location: gunks
Tick.create climb: adair, location: acadia
