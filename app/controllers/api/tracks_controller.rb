class Api::TracksController < ApplicationController
  def index
    #Implement Search Here Eventually
    @tracks = Track.all
  end

  def show
    @track = Track.find_by(id: params[:id])

    if @track.nil?
      render json: {errors: ["Could not be found"]}, status: 404
    else
      render :show
    end
  end

  def create
    @track = Track.new(track_params)

    if @track.save
      render :show
    else
      render json: {errors: @track.errors.full_messages}, status: 422
    end
  end

  def update
    @track = Track.find_by(id: params[:id])

    if @track.update_attributes(track_params)
      render :show
    else
      render json: {errors: @track.errors.full_messages}, status: 422
    end
  end

  def delete
    @track = Track.find_by(id: params[:id])

    if @track.nil?
      render json: {errors: ["Could not be found"]}, status: 404
    else
      id = @track.id
      @track.destroy
      render json: {id: id}
    end
  end

  private

  def track_params
    params.require(:track).permit(:title, :description,
                                  :track_thumb_nail, :track_recording)
  end
end
