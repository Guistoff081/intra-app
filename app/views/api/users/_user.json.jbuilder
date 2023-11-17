json.extract! user, :id, :name, :email, :role, :created_at, :updated_at
json.url api_user_url(user, format: :json)
