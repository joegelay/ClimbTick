class LocationsController < ApplicationController
    def index
        locations = Location.all 
        render json: locations, include: :climbs
    end 

    def show 
        location = Location.find_by(id: params[:id])
        render json: location, include: :climbs
    end 
end
