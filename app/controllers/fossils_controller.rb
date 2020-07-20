class FossilsController < ApplicationController
  def index
    single_part_fossils = SinglePartFossil.all
    multi_part_fossils = MultiPartFossil.all.includes(:fossil_pieces)

    # render json: [SinglePartFossilSerializer.new(single_part_fossils), MultiPartFossilSerializer.new(multi_part_fossils, include: [:fossil_pieces])].as_json
    render json: { singlePartFossils: SinglePartFossilSerializer.new(single_part_fossils),
                   multiPartFossils: MultiPartFossilSerializer.new(multi_part_fossils, include: [:fossil_pieces]) }
  end
end
