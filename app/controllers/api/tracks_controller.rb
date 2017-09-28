class Api::TracksController < ApplicationController
  def index
    #Implement Search Here Eventually
    if params[:user_id]
      @tracks = Track.includes(:artist).where(user_id: params[:user_id])
    else
      @tracks = Track.includes(:artist).all
    end
  end

  def show
    #This makes things work on heroku!
    params[:id].gsub! '%20', ' '

    @track = Track.includes(:artist).find_by(title: params[:id])

    if @track.nil?
      render json: {errors: ["Could not be found"]}, status: 404
    else
      render :show
    end
  end

  def create
    @track = Track.new(track_params)
    @track.user_id = current_user.id

    if @track.save
      render :show
    else
      render json: {errors: @track.errors.full_messages}, status: 422
    end

  end

  def update

    @track = Track.find_by(id: params[:id])

    if !@track.nil?
      if @track.update_attributes(track_params) && @track.artist == current_user
        render :show
      else
        render json: {errors: @track.errors.full_messages}, status: 422
      end
    else
      render json: {errors: ["Not Found"]}, status: 404
    end

  end

  def destroy
    @track = Track.find_by(id: params[:id])

    if @track.nil?
      render json: {errors: ["Could not be found"]}, status: 404
    elsif @track.artist.id == current_user.id
      id = @track.id
      @track.destroy
      render json: {id: id}
    else
      render json: {errors: ["Not Authorized to Delete"]}, status: 422
    end
  end

  def search
    @search_track_results = Track.where("title ILIKE '%#{params[:query]}%' ")
    @search_user_results = User.where("username ILIKE '%#{params[:query]}%' ")
    render :search
  end

  private

  def track_params
    params.require(:track).permit(:title, :description, :genre,
                                  :track_thumb_nail, :track_recording)
  end
end
