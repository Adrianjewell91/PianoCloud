class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.find_by(params[:track_id])
    render :index
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @comment.track_id = params[:track_id]

    unless @comment.save
      #Hope fully do nothing if saves and rerender.
      #Components will getIndex as a promise callback and trigger rerender.
      render json: {errors: @comment.errors.full_messages}, status: 422
    end

  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end
