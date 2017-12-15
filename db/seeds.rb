20.times do
  Post.create(title: Faker::VForVendetta.character,
              body: Faker::VForVendetta.speech,
              user_id: 1
              )
end
