class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title
      t.string :body
      t.date :date
      t.string :image

      t.timestamps
    end
  end
end
