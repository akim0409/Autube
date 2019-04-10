class Video < ApplicationRecord
    validates :title, presence: true
    
    has_one_attached :video
    has_one_attached :image
    
    belongs_to :user
    
    # validate :ensure_video
    # validate :ensure_image

    def ensure_video
        debugger
        unless self.video.attached?
            errors[:video] << "must be attached"
        end
    end

    # def ensure_image
    #     unless self.image.attached?
    #         errors[:image] << "must be attached"
    #     end
    # end
end
