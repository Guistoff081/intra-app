require 'factory_bot'

admin_user = FactoryBot.create(:user, email: 'admin@dev.com.br', role: :administrator, first_name: 'Desenvolvedor', last_name: 'Administrador', password: 'Teste@1234', password_confirmation: 'Teste@1234')
FactoryBot.create_list(:user, 9)
