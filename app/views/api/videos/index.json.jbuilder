json.videos do
  @videos.each do |video|
    json.set! video.id do
      json.extract! video, :id, :title
      json.videoUrl url_for(video.video)
      json.imageUrl url_for(video.image)
      json.createdAt "#{ video.created_at } ago"
    end
  end
end

# json.array! @videos do |video|
#   json.extract! video, :id, :title
#   json.videoUrl url_for(video.video)
#   json.imageUrl url_for(video.image)
# end