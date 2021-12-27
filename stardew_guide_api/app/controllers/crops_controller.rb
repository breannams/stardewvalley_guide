class CropsController < ApplicationController
  before_action :set_crop, only: [:show, :update, :destroy]

  # GET /crops
  def index
    @crops = Crop.all

    render json: @crops
  end

  # GET /crops/1
  def show
    render json: @crop
  end

  # POST /crops
  def create
    @crop = Crop.new(crop_params)

    if @crop.save
      render json: @crop, status: :created, location: @crop
    else
      render json: @crop.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /crops/1
  def update
    if @crop.update(crop_params)
      render json: @crop
    else
      render json: @crop.errors, status: :unprocessable_entity
    end
  end

  # DELETE /crops/1
  def destroy
    @crop.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_crop
      @crop = Crop.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def crop_params
      params.require(:crop).permit(:stardewvalley_id, :name, :grow_time, :buy_price, :sell_price, :restores, :used_in, :giant_crop, :image)
    end
end
