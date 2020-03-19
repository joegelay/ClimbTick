class CreateClimbs < ActiveRecord::Migration[6.0]
  def change
    create_table :climbs do |t|
      t.string :name
      t.string :grade
      t.integer :star_rating
      t.string :style
      t.date :date
      t.text :notes

      t.timestamps
    end
  end
end
