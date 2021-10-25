class HearteventsController < ApplicationController
  before_action :set_heartevent, only: [:show, :update, :destroy]

  # GET /heartevents
  def index
    @heartevents = Heartevent.all

    render json: @heartevents
  end

  # GET /heartevents/1
  def show
    render json: @heartevent
  end

  # POST /heartevents
  def create
    @heartevent = Heartevent.new(heartevent_params)

    if @heartevent.save
      render json: @heartevent, status: :created, location: @heartevent
    else
      render json: @heartevent.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /heartevents/1
  def update
    if @heartevent.update(heartevent_params)
      render json: @heartevent
    else
      render json: @heartevent.errors, status: :unprocessable_entity
    end
  end

  # DELETE /heartevents/1
  def destroy
    @heartevent.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_heartevent
      @heartevent = Heartevent.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def heartevent_params
      params.require(:heartevent).permit(:villagers_id, :heart_number, :description)
    end
end
