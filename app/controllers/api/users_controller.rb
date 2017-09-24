class Api::UsersController < ApplicationController

  def index
    #eventually implement search-for-users functionality with params query.
    @users = User.all
    render :index
  end

  def show
    params[:id].gsub! '%20', ' ' #to switch the thing.
    #could potentially do a rescue for track or song errors
    @user = User.find_by(username: params[:id])
    if @user
      render :show_profile
    else
      render json: ["User doesn't exist"], status: 404
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: {errors: @user.errors.full_messages}, status: 422
    end
  end

  def update
    # debugger
    @user = User.find_by(id: params[:id])

    if !@user.nil?
      if @user.update_attributes(user_params) && current_user.id = @user.id
        render :show_profile
      else
        render json: {errors: @user.errors.full_messages}, status: 422
      end
    else
      render json: {errors: ["Not Found"]}, status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email,
                                 :name, :location, :thumb_nail)
  end

end
