json.extract! track, :id, :title, :description, :genre
json.artist_id track.user_id
json.artist track.artist.username
json.track_recording asset_path(track.track_recording.url)
json.thumb_nail_url asset_path(track.track_thumb_nail.url)
