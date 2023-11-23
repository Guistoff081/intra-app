module NavHelper
  def nav_link_to(name = nil, options = {}, html_options = {}, &block)
    name, options, html_options = block, name, options if block_given?

    url = url_for(options)
    starts_with = html_options.delete(:starts_with)
    active_class = html_options.delete(:active_class) || 'is-active'
    inactive_class = html_options.delete(:inactive_class) || ''

    active = link_active?(url, starts_with)

    add_active_class(html_options, active, active_class, inactive_class)

    link_to(name, url, html_options, &block)
  end

  private

  def link_active?(url, starts_with)
    Array(starts_with).any? { |path| request.path.start_with?(path) } || request.path == url
  end

  def add_active_class(html_options, active, active_class, inactive_class)
    html_options[:class] ||= []
    html_options[:class] << (active ? active_class : inactive_class) unless active_class.empty?
    html_options.delete(:class) if html_options[:class].empty?
  end
end
