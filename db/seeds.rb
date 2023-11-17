admin_user = FactoryBot.create(:user, email: 'admin@dev.com.br', role: :administrator, first_name: 'Desenvolvedor', last_name: 'Administrador')
FactoryBot.create_list(:user, 9)
