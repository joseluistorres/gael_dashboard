class CreateTimeBlocks < ActiveRecord::Migration[5.1]
  def change
    create_table :time_blocks do |t|
      t.string :date_range
      t.integer :total, null: false
      t.datetime :started_at, null: false
      t.datetime :ended_at, null: false
      t.references :user, index: true, foreign_key: { to_table: :users }
      t.timestamps
    end
  end
end
