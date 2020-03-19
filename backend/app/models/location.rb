class Location < ApplicationRecord
    has_many :ticks
    has_many :climbs, through: :ticks
end
