class Track < ApplicationRecord
  validates :title, :user_id, presence: true

  has_attached_file :track_recording
  validates_attachment_content_type :track_recording, content_type: /\Aaudio\/.*\Z/,
                                    :allow_nil => true
  # do_not_validate_attachment_file_type :track_recording

  has_attached_file :track_thumb_nail, default_url: "https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/hero.jpg"
  validates_attachment_content_type :track_thumb_nail, content_type: /\Aimage\/.*\Z/,
                                    :allow_nil => true

  #Add this later:
  # validates_attachment_size :track_recording less_than: 15.megabytes

  belongs_to :artist, #Note the terminology.
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id

  has_many :comments,
  class_name: :Comment,
  primary_key: :id,
  foreign_key: :track_id
end
