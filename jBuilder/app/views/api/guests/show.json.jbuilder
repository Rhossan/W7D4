# json.guest do
  # json.name @guest.name
  # json.age @guest.age
  # json.favorite_color @guest.favorite_color
# end

json.extract! @guest, :name, :age, :favorite_color
