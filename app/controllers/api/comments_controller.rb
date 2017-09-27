class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.includes(:user).where(track_id: params[:track_id])
    render :index
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @comment.track_id = params[:track_id]

    if @comment.save
      render :show
    else
      render json: {errors: @comment.errors.full_messages}, status: 422
    end

  end

  def destroy
    @comment = Comment.find_by(id: params[:id])

    if @comment.nil?
      render json: {errors: ["Could not be found"]}, status: 404
    elsif @comment.user.id == current_user.id
      id = @comment.id
      @comment.destroy
      render json: {id: id}
    else
      render json: {errors: ["Not Authorized to Delete"]}, status: 422
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end
