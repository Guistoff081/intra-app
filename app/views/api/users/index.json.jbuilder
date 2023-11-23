json.data @users[:data], partial: "api/users/user", as: :user

json.partial! "api/shared/pagination", collection: @users[:pagination]
