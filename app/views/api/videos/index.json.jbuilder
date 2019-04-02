json.videos do
  @videos.each do |video|
    json.set! video.id do
      json.extract! video, :id, :title
      json.videoUrl url_for(video.video)
      json.upload_date "#{ video.created_at } ago"
    end
  end
end