class CreateDocuments < ActiveRecord::Migration
  def change
    create_table :documents do |t|
      t.text :file_url

      t.timestamps
    end
  end
end
