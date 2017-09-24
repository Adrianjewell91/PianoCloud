json.partial! 'api/users/user', user: @user
json.tracks @user.tracks #.map{|track| track.id}
