# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
Like.destroy_all
Video.destroy_all
User.destroy_all

demo_user = User.create([
    { username: 'iSWATxJOKERi', email: 'iswatxjokeri@gmail.com', password: 'ilovehalo123' },
    { username: 'BigDog', email: 'bigdog@aol.com', password: 'ilovehaloandfifa' },
])

# thumbnail
# video

file1 = open("https://active-storage-enjoy-seeds.s3.amazonaws.com/BFH2.jpg")
file2 = open("https://active-storage-enjoy-seeds.s3.amazonaws.com/BFHVID1.mp4")
file3 = open("https://active-storage-enjoy-seeds.s3.amazonaws.com/BFH.jpg")
file4 = open("https://active-storage-enjoy-seeds.s3.amazonaws.com/BHVID2.mp4")
file5 = open("https://active-storage-enjoy-seeds.s3.amazonaws.com/lana.jpg")
file6 = open("https://active-storage-enjoy-seeds.s3.amazonaws.com/BLUEJEANS.mp4")
file7 = open("https://active-storage-enjoy-seeds.s3.amazonaws.com/HALO1.jpg")
file8 = open("https://active-storage-enjoy-seeds.s3.amazonaws.com/HALOVID1.mp4")
file9 = open("https://active-storage-enjoy-seeds.s3.amazonaws.com/PUBG1.jpg")
file10 = open("https://active-storage-enjoy-seeds.s3.amazonaws.com/PUBGVID2.mp4")
file11 = open("https://active-storage-enjoy-seeds.s3.amazonaws.com/PUBG2.jpg")
file12 = open("https://active-storage-enjoy-seeds.s3.amazonaws.com/PUBGVID1.mp4")
file13 = open("https://active-storage-enjoy-seeds.s3.amazonaws.com/HALOREACH.jpeg")
file14 = open("https://active-storage-enjoy-seeds.s3.amazonaws.com/HALOVID2.mp4")
file15 = open("https://active-storage-enjoy-seeds.s3.amazonaws.com/FIFA1.jpg")
file16 = open("https://active-storage-enjoy-seeds.s3.amazonaws.com/FIFAVID3.mp4")
file17 = open("https://active-storage-enjoy-seeds.s3.amazonaws.com/FIFA4.jpg")
file18 = open("https://active-storage-enjoy-seeds.s3.amazonaws.com/FIFAVID1.mp4")
file19 = open("https://active-storage-enjoy-seeds.s3.amazonaws.com/BFH5.jpg")
file20 = open("https://active-storage-enjoy-seeds.s3.amazonaws.com/Hardline2.mp4")
file21 = open("https://active-storage-enjoy-seeds.s3.amazonaws.com/BFH3.jpg")
file22 = open("https://active-storage-enjoy-seeds.s3.amazonaws.com/BFHVID3.mp4")
file23 = open("https://active-storage-enjoy-seeds.s3.amazonaws.com/BH4.jpg")
file24 = open("https://active-storage-enjoy-seeds.s3.amazonaws.com/BFHVID4.mp4")
file25 = open("https://active-storage-enjoy-seeds.s3.amazonaws.com/BFH6.jpg")
file26 = open("https://active-storage-enjoy-seeds.s3.amazonaws.com/Hardline1.mp4")

videos = [
    { title: "Battlefield Hardline Quickscoping Montage", description: "I really do this", uploader_id: User.first.id },
    { title: "Nobody's Safe", description: "I really do this", uploader_id: User.first.id },
    { title: "Lana del Rey - Blue Jeans", description: "Music in this video: Song - Blue Jeans (Album Version - Remastered) Artist Lana Del Rey", uploader_id: User.first.id },
    { title: "Halo 5", description: "Free-for-all on Eden", uploader_id: User.first.id },
    { title: "PUBG 1-Man Squads", description: "Shoulda captured my other clips, woulda came in handy for this seedsject...but for now...", uploader_id: User.first.id },
    { title: "PUBG 1-Man Squads 2", description: "Shoulda captured my other clips, woulda came in handy for this seedsject...but for now...", uploader_id: User.first.id },
    { title: "Ninjaed", description: "Dummy", uploader_id: User.first.id },
    { title: "FIFA 19", description: "Boring", uploader_id: User.first.id },
    { title: "Free Kick", description: "Boring....", uploader_id: User.first.id },
    { title: "Big Dogging it", description: "I really do this", uploader_id: User.second.id },
    { title: "Battlefield Hardline", description: "Sum'n lite", uploader_id: User.second.id },
    { title: "Battlefield Hardline 1", description: "Eh...", uploader_id: User.second.id },
    { title: "Battlefield Hardline 2", description: "K", uploader_id: User.second.id }
]

videos.map! do |video|
    Video.new(video)
end

videos[0].thumbnail.attach(io: file1, filename: 'BFH2.jpg')
videos[0].clip.attach(io: file2, filename: 'BFHVID1.mp4')

videos[1].thumbnail.attach(io: file3, filename: 'BFH.jpg')
videos[1].clip.attach(io: file4, filename: 'BHVID2.mp4')

videos[2].thumbnail.attach(io: file5, filename: 'lana.jpg')
videos[2].clip.attach(io: file6, filename: 'BLUEJEANS.mp4')

videos[3].thumbnail.attach(io: file7, filename: 'HALO1.jpg')
videos[3].clip.attach(io: file8, filename: 'HALOVID1.mp4')

videos[4].thumbnail.attach(io: file9, filename: 'PUBG1.jpg')
videos[4].clip.attach(io: file10, filename: 'PUBGVID2.mp4')

videos[5].thumbnail.attach(io: file11, filename: 'PUBG2.jpg')
videos[5].clip.attach(io: file12, filename: 'PUBGVID1.mp4')

videos[6].thumbnail.attach(io: file13, filename: 'HALOREACH.jpeg')
videos[6].clip.attach(io: file14, filename: 'HALOVID2.mp4')

videos[7].thumbnail.attach(io: file15, filename: 'FIFA1.jpg')
videos[7].clip.attach(io: file16, filename: 'FIFAVID3.mp4')

videos[8].thumbnail.attach(io: file17, filename: 'FIFA4.jpg')
videos[8].clip.attach(io: file18, filename: 'FIFAVID1.mp4')

videos[9].thumbnail.attach(io: file19, filename: 'BFH5.jpg')
videos[9].clip.attach(io: file20, filename: 'Hardline2.mp4')

videos[10].thumbnail.attach(io: file21, filename: 'BFH3.jpg')
videos[10].clip.attach(io: file22, filename: 'BFHVID3.mp4')

videos[11].thumbnail.attach(io: file23, filename: 'BH4.jpg')
videos[11].clip.attach(io: file24, filename: 'BFHVID4.mp4')

videos[12].thumbnail.attach(io: file25, filename: 'BFH6.jpg')
videos[12].clip.attach(io: file26, filename: 'Hardline1.mp4')


videos.each { |video| video.save! }

# file1 = open("/mnt/c/Users/123/Videos/Captures/BFH2.jpg")
# file2 = open("/mnt/c/Users/123/Videos/Captures/BFHVID1.mp4")
# file3 = open("/mnt/c/Users/123/Videos/Captures/BFH.jpg")
# file4 = open("/mnt/c/Users/123/Videos/Captures/BHVID2.mp4")
# file5 = open("/mnt/c/Users/123/Videos/Captures/lana.jpg")
# file6 = open("/mnt/c/Users/123/Videos/Captures/BLUEJEANS.mp4")
# file7 = open("/mnt/c/Users/123/Videos/Captures/HALO1.jpg")
# file8 = open("/mnt/c/Users/123/Videos/Captures/HALOVID1.mp4")
# file9 = open("/mnt/c/Users/123/Videos/Captures/PUBG1.jpg")
# file10 = open("/mnt/c/Users/123/Videos/Captures/PUBGVID2.mp4")
# file11 = open("/mnt/c/Users/123/Videos/Captures/PUBG2.jpg")
# file12 = open("/mnt/c/Users/123/Videos/Captures/PUBGVID1.mp4")
# file13 = open("/mnt/c/Users/123/Videos/Captures/HALOREACH.jpeg")
# file14 = open("/mnt/c/Users/123/Videos/Captures/HALOVID2.mp4")
# file15 = open("/mnt/c/Users/123/Videos/Captures/FIFA1.jpg")
# file16 = open("/mnt/c/Users/123/Videos/Captures/FIFAVID3.mp4")
# file17 = open("/mnt/c/Users/123/Videos/Captures/FIFA4.jpg")
# file18 = open("/mnt/c/Users/123/Videos/Captures/FIFAVID1.mp4")
# file19 = open("/mnt/c/Users/123/Videos/Captures/BFH5.jpg")
# file20 = open("/mnt/c/Users/123/Videos/Captures/Hardline2.mp4")
# file21 = open("/mnt/c/Users/123/Videos/Captures/BFH3.jpg")
# file22 = open("/mnt/c/Users/123/Videos/Captures/BFHVID3.mp4")
# file23 = open("/mnt/c/Users/123/Videos/Captures/BH4.jpg")
# file24 = open("/mnt/c/Users/123/Videos/Captures/BFHVID4.mp4")
# file25 = open("/mnt/c/Users/123/Videos/Captures/BFH6.jpg")
# file26 = open("/mnt/c/Users/123/Videos/Captures/Hardline1.mp4")

# videos = [
#     { title: "Battlefield Hardline Quickscoping Montage", description: "I really do this", uploader_id: User.first.id },
#     { title: "Nobody's Safe", description: "I really do this", uploader_id: User.first.id },
#     { title: "Lana del Rey - Blue Jeans", description: "Music in this video: Song - Blue Jeans (Album Version - Remastered) Artist Lana Del Rey", uploader_id: User.first.id },
#     { title: "Halo 5", description: "Free-for-all on Eden", uploader_id: User.first.id },
#     { title: "PUBG 1-Man Squads", description: "Shoulda captured my other clips, woulda came in handy for this seedsject...but for now...", uploader_id: User.first.id },
#     { title: "PUBG 1-Man Squads 2", description: "Shoulda captured my other clips, woulda came in handy for this seedsject...but for now...", uploader_id: User.first.id },
#     { title: "Ninjaed", description: "Dummy", uploader_id: User.first.id },
#     { title: "FIFA 19", description: "Boring", uploader_id: User.first.id },
#     { title: "Free Kick", description: "Boring....", uploader_id: User.first.id },
#     { title: "Big Dogging it", description: "I really do this", uploader_id: User.second.id },
#     { title: "Battlefield Hardline", description: "Sum'n lite", uploader_id: User.second.id },
#     { title: "Battlefield Hardline 1", description: "Eh...", uploader_id: User.second.id },
#     { title: "Battlefield Hardline 2", description: "K", uploader_id: User.second.id }
# ]

# videos.map! do |video|
#     Video.new(video)
# end

# videos[0].thumbnail.attach(io: file1, filename: 'BFH2.jpg')
# videos[0].clip.attach(io: file2, filename: 'BFHVID1.mp4')

# videos[1].thumbnail.attach(io: file3, filename: 'BFH.jpg')
# videos[1].clip.attach(io: file4, filename: 'BHVID2.mp4')

# videos[2].thumbnail.attach(io: file5, filename: 'lana.jpg')
# videos[2].clip.attach(io: file6, filename: 'BLUEJEANS.mp4')

# videos[3].thumbnail.attach(io: file7, filename: 'HALO1.jpg')
# videos[3].clip.attach(io: file8, filename: 'HALOVID1.mp4')

# videos[4].thumbnail.attach(io: file9, filename: 'PUBG1.jpg')
# videos[4].clip.attach(io: file10, filename: 'PUBGVID2.mp4')

# videos[5].thumbnail.attach(io: file11, filename: 'PUBG2.jpg')
# videos[5].clip.attach(io: file12, filename: 'PUBGVID1.mp4')

# videos[6].thumbnail.attach(io: file13, filename: 'HALOREACH.jpeg')
# videos[6].clip.attach(io: file14, filename: 'HALOVID2.mp4')

# videos[7].thumbnail.attach(io: file15, filename: 'FIFA1.jpg')
# videos[7].clip.attach(io: file16, filename: 'FIFAVID3.mp4')

# videos[8].thumbnail.attach(io: file17, filename: 'FIFA4.jpg')
# videos[8].clip.attach(io: file18, filename: 'FIFAVID1.mp4')

# videos[9].thumbnail.attach(io: file19, filename: 'BFH5.jpg')
# videos[9].clip.attach(io: file20, filename: 'Hardline2.mp4')

# videos[10].thumbnail.attach(io: file21, filename: 'BFH3.jpg')
# videos[10].clip.attach(io: file22, filename: 'BFHVID3.mp4')

# videos[11].thumbnail.attach(io: file23, filename: 'BH4.jpg')
# videos[11].clip.attach(io: file24, filename: 'BFHVID4.mp4')

# videos[12].thumbnail.attach(io: file25, filename: 'BFH6.jpg')
# videos[12].clip.attach(io: file26, filename: 'Hardline1.mp4')


# videos.each { |video| video.save! }