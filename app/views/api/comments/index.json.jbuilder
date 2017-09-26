json.array! @comments do |comment|
  json.extract! comment, :id, :body, :created_at
  json.author comment.user.username
end
