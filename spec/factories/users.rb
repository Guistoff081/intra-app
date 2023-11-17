# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  first_name             :string
#  last_name              :string
#  phone                  :string           default(""), not null
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  role                   :integer          default("operator"), not null
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
# Indexes
#
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#
FactoryBot.define do
  factory :user do
    name { Faker::Name.name }
    role { [:operator, :consultant, :administrator].sample }
    email { Faker::Internet.unique.email }
    password { Faker::Internet.password(min_length: 8) }
    avatar { Rack::Test::UploadedFile.new(
      Rails.root.join('app/assets/images/default_avatar.jpg'),
      'image/png'
    ) }
  end
end
