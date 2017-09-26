class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.where(track_id: params[:track_id])
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

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end
