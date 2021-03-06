class FestivalsController < ApplicationController
  before_action :set_festival, only: [:show, :update, :destroy]

  # GET /festivals
  def index
    @festivals = Festival.all

    render json: @festivals
  end

  # GET /festivals/1
  def show
    render json: @festival
  end

  # POST /festivals
  def create
    @festival = Festival.new(festival_params)

    if @festival.save
      render json: @festival, status: :created, location: @festival
    else
      render json: @festival.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /festivals/1
  def update
    if @festival.update(festival_params)
      render json: @festival
    else
      render json: @festival.errors, status: :unprocessable_entity
    end
  end

  # DELETE /festivals/1
  def destroy
    @festival.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_festival
      @festival = Festival.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def festival_params
      params.require(:festival).permit(:stardewvalley_id, :name, :date, :time_location, :description, :purchases)
    end
end
