class ClimbsController < ApplicationController
    def index
        climbs = Climb.all 
        render json: climbs, include: :location
    end 

    def create 
        location = Location.where(:state => params[:state], :crag => params[:crag]).first_or_create

        Climb.create name: params[:name], grade: params[:grade], star_rating: params[:star_rating], 
                    style: params[:style], date: params[:date], notes: params[:notes], location: location 

        redirect_to "http://localhost:3000/"
    end 
end
