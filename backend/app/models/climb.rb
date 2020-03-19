class Climb < ApplicationRecord
    has_one :tick
    has_one :location, through: :tick
end
