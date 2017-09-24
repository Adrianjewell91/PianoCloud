json.partial! 'api/users/user', user: @user
json.track_ids @user.tracks #.map{|track| track.id}
