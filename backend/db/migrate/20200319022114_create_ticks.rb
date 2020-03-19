class CreateTicks < ActiveRecord::Migration[6.0]
  def change
    create_table :ticks do |t|
      t.references :climb, null: false, foreign_key: true
      t.references :location, null: false, foreign_key: true

      t.timestamps
    end
  end
end
