class CreateGrades < ActiveRecord::Migration[5.1]
  def change
    create_table :grades do |t|
      t.references :category, index: true, foreign_key: { to_table: :categories }
      t.references :time_unit, index: true, foreign_key: { to_table: :time_units }
      t.integer :value
      t.boolean :passed

      t.timestamps
    end
  end
end
