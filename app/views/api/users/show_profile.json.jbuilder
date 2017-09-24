json.partial! 'api/users/user', user: @user
json.tracks @user.tracks.map do |track|
  json.partial! 'api/tracks/track', track: track
end
