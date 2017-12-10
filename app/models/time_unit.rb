class TimeUnit < ApplicationRecord
  belongs_to :time_block
  has_one :grade, dependent: :destroy
end
