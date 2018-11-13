class Api::InterestsController < ApplicationController

  def show
    @interests = Interest.all
  end
  
end
