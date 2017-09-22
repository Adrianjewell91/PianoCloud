class Track < ApplicationRecord
  validates :title, :user_id, presence: true

  has_attached_file :track_recording
  validates_attachment_content_type :track_recording, content_type: 'audio/mpeg'

  has_attached_file :track_thumb_nail
  validates_attachment_content_type :track_thumb_nail, content_type: /\Aimage\/.*\Z/

  #Add this later:
  # validates_attachment_size :track_recording less_than: 15.megabytes

  belongs_to :artist, #Note the terminology.
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id
end
