json.array! @comments do |comment|
  json.extract! comment, :id, :body, :parent_id, :created_at, :track_id
  json.author comment.user.username
  json.author_image_url asset_path(comment.user.thumb_nail.url)
end
