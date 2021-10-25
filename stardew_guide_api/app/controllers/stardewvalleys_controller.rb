class StardewvalleysController < ApplicationController
  before_action :set_stardewvalley, only: [:show, :update, :destroy]

  # GET /stardewvalleys
  def index
    @stardewvalleys = Stardewvalley.all

    render json: @stardewvalleys
  end

  # GET /stardewvalleys/1
  def show
    render json: @stardewvalley
  end

  # POST /stardewvalleys
  def create
    @stardewvalley = Stardewvalley.new(stardewvalley_params)

    if @stardewvalley.save
      render json: @stardewvalley, status: :created, location: @stardewvalley
    else
      render json: @stardewvalley.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /stardewvalleys/1
  def update
    if @stardewvalley.update(stardewvalley_params)
      render json: @stardewvalley
    else
      render json: @stardewvalley.errors, status: :unprocessable_entity
    end
  end

  # DELETE /stardewvalleys/1
  def destroy
    @stardewvalley.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_stardewvalley
      @stardewvalley = Stardewvalley.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def stardewvalley_params
      params.require(:stardewvalley).permit(:type)
    end
end
