class CreateContacts < ActiveRecord::Migration
  def change
    create_table(:contacts) do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :telephone
      t.references :users
      t.timestamps

    end
  end
end
