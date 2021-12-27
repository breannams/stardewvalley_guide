class BundlesController < ApplicationController
  before_action :set_bundle, only: [:show, :update, :destroy]

  # GET /bundles
  def index
    @bundles = Bundle.all

    render json: @bundles
  end

  # GET /bundles/1
  def show
    render json: @bundle
  end

  # POST /bundles
  def create
    @bundle = Bundle.new(bundle_params)

    if @bundle.save
      render json: @bundle, status: :created, location: @bundle
    else
      render json: @bundle.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /bundles/1
  def update
    if @bundle.update(bundle_params)
      render json: @bundle
    else
      render json: @bundle.errors, status: :unprocessable_entity
    end
  end

  # DELETE /bundles/1
  def destroy
    @bundle.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bundle
      @bundle = Bundle.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def bundle_params
      params.require(:bundle).permit(:stardewvalleys_id, :room, :room_reward, :name, :requirements, :bundle_reward, :image)
    end
end
