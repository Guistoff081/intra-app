class UserDecorator < ApplicationDecorator
  delegate_all

  def created_at
    I18n.l(object.created_at, format: :long)
  end

  def updated_at
    I18n.l(object.updated_at, format: :long)
  end

  def role
    I18n.t("enum.user.role.#{object.role}")
  end
end
