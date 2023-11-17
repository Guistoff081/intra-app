module ApplicationHelper
  def ui_translations
    translations = { 'pt-BR': I18n.t('.') }
    translations.to_json.html_safe
  end
end
