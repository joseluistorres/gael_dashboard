class Grade < ApplicationRecord
  belongs_to :category
  belongs_to :time_unit
end
