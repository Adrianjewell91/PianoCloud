json.extract! user, :id, :username, :name, :location

json.thumb_nail_url asset_path(user.thumb_nail.url)
