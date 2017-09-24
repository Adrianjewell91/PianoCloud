json.partial! 'api/users/user', user: @user
json.email @user.email
json.tracks @user.tracks.map do |track|
  json.partial! 'api/tracks/track', track: track
end
