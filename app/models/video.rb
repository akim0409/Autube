class Video < ApplicationRecord
    validates :title, presence: true

    has_one_attached :video

    belongs_to :user
end
