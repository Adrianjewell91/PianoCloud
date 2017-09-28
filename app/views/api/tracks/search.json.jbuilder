json.tracks @search_track_results do |track|
  json.partial! 'api/tracks/track', track: track, user: track.artist
end

json.users @search_user_results do |user|
  json.partial! 'api/users/user', user: user
end
