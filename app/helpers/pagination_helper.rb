module PaginationHelper
  Pagination = Struct.new(:current_page, :last_page, :prev_page_url, :next_page_url, :per_page, :total_entries)

  def paginate(scope, default_per_page: 10, options: {}, decorate: false, decorate_name: nil)
    if params[:per_page] == 'all'
      collection, current, total_pages, per_page, total_count = all_itens(scope)
    else
      collection, current, total_pages, per_page, total_count = with_paginate(scope, default_per_page:,
                                                                                     options:, decorate:, decorate_name:)
    end

    {
      data: collection,
      pagination: Pagination.new(
        current,total_pages,
        next_page_url(current, per_page),
        previous_page_url(current, per_page),
        per_page,
        total_count
      )
    }
  end

  def with_paginate(scope, default_per_page:, options:, decorate:, decorate_name:)
    if decorate
      klass = get_decorator(scope, decorate_name)

      collection = klass.decorate_collection(scope.page(params[:page]).per_page((params[:per_page] || default_per_page).to_i))
    else
      collection = scope&.page(params[:page])&.per_page((params[:per_page] || default_per_page).to_i)
    end

    current = collection.current_page
    total_page = collection.total_pages
    per_page = collection.per_page
    total_count = collection.total_entries

    collection = collection.as_json(options) if options.present?

    [collection, current, total_page, per_page, total_count]
  end

  def all_itens(scope)
    collection = scope.all
    current = 1
    total_page = 1
    per_page = collection.size
    total_count = collection.size

    [collection, current, total_page, per_page, total_count]
  end

  def get_decorator(scope, decorate_name)
    klass = if decorate_name
      decorate_name.constantize
    else
      "#{scope.table_name.singularize}_decorator".camelcase.constantize
            end
  end

  def klass_to_decorate(default_per_page, scope)
    klass = "#{scope.table_name.singularize}_decorator".camelcase.constantize
    klass.decorate_collection(scope.page(params[:page]).per_page((params[:per_page] || default_per_page).to_i))
  end

  def next_page_url(current, per_page)
    "page=#{current+1}&per_page=#{per_page}"
  end

  def previous_page_url(current, per_page)
    page = current == 1 ? 1 : current-1
    "page=#{page}&per_page=#{per_page}"
  end
end
