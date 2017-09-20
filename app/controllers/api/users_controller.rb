class Api::UsersController < ApplicationController

  def index
    #eventually implement search-for-users functionality with params query.
    @users = User.all
    render :index
  end

  # def show
  #   @user = User.find_by(username: username)
  #   if @user
  #     render :show
  #   else
  #     render json: ["User doesn't exist"], status: 404
  # end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: {errors: @user.errors.full_messages}, status: 401
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
