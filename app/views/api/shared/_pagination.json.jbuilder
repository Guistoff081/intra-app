json.pagination do
  json.current  collection.current_page
  json.previous collection.prev_page_url
  json.next     collection.next_page_url
  json.per_page collection.per_page
  json.last_page collection.last_page
  json.count    collection.total_entries
end
