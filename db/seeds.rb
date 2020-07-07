# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'Creating users...'
User.create!(email: 'mendesnathanj@gmail.com', password: 'password', password_confirmation: 'password')

puts 'Creating months...'
Month.create!(name: 'Jan')
Month.create!(name: 'Feb')
Month.create!(name: 'Mar')
Month.create!(name: 'Apr')
Month.create!(name: 'May')
Month.create!(name: 'Jun')
Month.create!(name: 'Jul')
Month.create!(name: 'Aug')
Month.create!(name: 'Sep')
Month.create!(name: 'Oct')
Month.create!(name: 'Nov')
Month.create!(name: 'Dec')


bugs = JSON.parse(File.read("#{__dir__}/data/bugs.json"))

bugs.each do |id, bug|
  puts "Creating #{bug['name']}..."

  record = Bug.new(name: bug['name'], value: bug['value'])
  record.location = Location.find_or_create_by!(name: bug['location'])


  # record.image.attach(io: File.open("#{__dir__}/data/imgs/bugs_small/#{bug['fileName']}"), filename: bug['fileName'])
  record.save!

  bug['months'].each do |hemisphere, months|
    months.each do |month, _|
      FoundMonth.create!(collectible: record, month: Month.find_by(name: month), hemisphere: hemisphere)
    end
  end

  bug['times'].each do |time|
    time_frame = TimeFrame.find_or_create_by!(start: time['start'], end: time['end'])
    FoundTimeFrame.create!(collectible: record, time_frame: time_frame)
  end
end

fishes = JSON.parse(File.read("#{__dir__}/data/fish.json"))

fishes.each do |id, fish|
  puts "Creating #{fish['name']}..."

  record = Fish.new(name: fish['name'], value: fish['value'])
  record.location = Location.find_or_create_by!(name: fish['location'])
  record.shadow = Shadow.find_or_create_by!(size: fish['shadowSize'])
  # record.image.attach(io: File.open("#{__dir__}/data/imgs/fish_small/#{fish['fileName']}"), filename: fish['fileName'])
  record.save!

  fish['months'].each do |hemisphere, months|
    months.each do |month, _|
      FoundMonth.create!(collectible: record, month: Month.find_by(name: month), hemisphere: hemisphere)
    end
  end

  fish['times'].each do |time|
    time_frame = TimeFrame.find_or_create_by!(start: time['start'], end: time['end'])
    FoundTimeFrame.create!(collectible: record, time_frame: time_frame)
  end
end

sea_creatures = JSON.parse(File.read("#{__dir__}/data/sea_creatures.json"))

sea_creatures.each do |id, sea_creature|
  puts "Creating #{sea_creature['name']}..."

  record = SeaCreature.new(name: sea_creature['name'], value: sea_creature['value'])
  record.shadow = Shadow.find_or_create_by!(size: sea_creature['shadowSize'])
  record.swimming_pattern = SwimmingPattern.find_or_create_by!(pattern: sea_creature['swimmingPattern'])
  # record.image.attach(io: File.open("#{__dir__}/data/imgs/sea_creatures_small/#{sea_creature['fileName']}"), filename: sea_creature['fileName'])
  record.save!

  sea_creature['months'].each do |hemisphere, months|
    months.each do |month, _|
      FoundMonth.create!(collectible: record, month: Month.find_by(name: month), hemisphere: hemisphere)
    end
  end

  sea_creature['times'].each do |time|
    time_frame = TimeFrame.find_or_create_by!(start: time['start'], end: time['end'])
    FoundTimeFrame.create!(collectible: record, time_frame: time_frame)
  end
end

albums = JSON.parse(File.read("#{__dir__}/data/music.json"))

albums.each do |id, album|
  puts "Creating #{album['name']}..."

  record = Album.new(name: album['name'], live_only: album['liveOnly'])
  # record.image.attach(io: File.open("#{__dir__}/data/imgs/music/#{album['fileName']}"), filename: album['fileName'])
  record.save!
end

fossils = JSON.parse(File.read("#{__dir__}/data/fossils.json"))
components = JSON.parse(File.read("#{__dir__}/data/fossil_components.json"))

fossils.each do |id, fossil|
  puts "Creating #{fossil['name']}..."

  if fossil['components'].empty?
    SinglePartFossil.create!(name: fossil['name'], value: fossil['value'])
  else
    daddy_fossil = MultiPartFossil.create!(name: fossil['name'])

    fossil['components'].map(&:to_s).each do |id|
      piece = components[id]
      FossilPiece.create!(multi_part_fossil: daddy_fossil, value: piece['value'], name: piece['name'])
    end
  end
end
