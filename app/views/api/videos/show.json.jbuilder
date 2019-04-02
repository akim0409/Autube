json.video do
  json.extract! @video, :title, :description, :id
  json.userId @video.user_id
  json.upload_date @video.created_at
  json.videoUrl @video.video.url
end

json.users do 
  @videos.each do |video|
    json.set! video.user.id do
      json.extract! video.user, :id, :username
    end
  end
end