class CreateTimeUnits < ActiveRecord::Migration[5.1]
  def change
    create_table :time_units do |t|
      t.string :name
      t.integer :grade_total
      t.references :time_block, index: true, foreign_key: { to_table: :time_blocks }

      t.timestamps
    end
  end
end
