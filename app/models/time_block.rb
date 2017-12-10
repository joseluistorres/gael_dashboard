class TimeBlock < ApplicationRecord
  belongs_to :user
  has_many :time_units, dependent: :destroy
  scope :for_started_at, -> started_at {
    where(started_at: started_at)
  }
end
