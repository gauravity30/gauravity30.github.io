# Run with the Jekyll bundle; emits only public bibliographic fields.
require 'bibtex'
require 'json'
references = BibTeX.parse(STDIN.read).entries.values.map do |entry|
  fields = %i[title author year journal booktitle publisher doi url].to_h do |field|
    value = entry[field].to_s.gsub(/[{}]/, '')
    [field, value]
  end
  fields.merge(id: entry.key)
end
puts JSON.pretty_generate(references)
