require 'cgi'
require 'json'
require 'pathname'
require 'uri'

module NotesGarden
  class Generator < Jekyll::Generator
    priority :highest

    def generate(site)
      collection = site.collections['notes']
      return unless collection

      collection.docs.select! { |doc| doc.data['publish'] == true }
      notes = collection.docs
      index = Hash.new { |hash, key| hash[key] = [] }
      notes.each do |note|
        path = note.relative_path.sub(%r{^_notes/}, '').sub(/\.[^.]+$/, '')
        note.data['title'] ||= File.basename(path)
        note.data['note_links'] = []
        note.data['backlinks'] = []
        [path, File.basename(path), note.data['title'], *Array(note.data['aliases'])].each do |key|
          index[key.to_s.downcase] << note unless index[key.to_s.downcase].include?(note)
        end
      end
      notes.each do |note|
        # The page layout supplies the title. Remove only an identical opening H1.
        title = Regexp.escape(note.data['title'].to_s.strip)
        note.content = note.content.sub(/\A\s*\# +#{title}(?: +\#+)?[ \t]*\r?\n/i, '')
        note.content = note.content.sub(/\A\s*#{title}[ \t]*\r?\n=+[ \t]*\r?\n/i, '')
        # Leave fenced and inline code examples unchanged.
        note.content = note.content.split(/(```.*?```|~~~.*?~~~|`[^`\n]+`)/m).each_with_index.map do |part, i|
          next part if i.odd?
          part = part.gsub(/^(\*{0,2}Course:\*{0,2}[ \t]*)(.+?)[ \t]*$/i) do
            prefix, course = Regexp.last_match.captures
            category = note.data['category'].to_s
            if category.empty?
              prefix + course
            else
              label = course.sub(/\A\[\[(.*?)\]\]\z/, '\1').split('|').last
              label = category.split('/').last if label.to_s.strip.empty?
              url = site.baseurl.to_s + '/notes/?' + URI.encode_www_form(topic: category)
              %(#{prefix}<a class="note-course" href="#{CGI.escapeHTML(url)}">#{CGI.escapeHTML(label)}</a>)
            end
          end
          # Markdown soft line breaks collapse; metadata needs explicit hard breaks.
          part = part.gsub(/^(\*{1,2}(?:Created on|Tags|Course):\*{1,2}[^\r\n]*?)[ \t]*$/i) do
            Regexp.last_match(1) + '  '
          end
          part.gsub(/(!?)\[\[([^\]\n]+)\]\]/) do
            embed, reference = Regexp.last_match.captures
            target, label = reference.split('|', 2)
            name, heading = target.split('#', 2)
            candidates = name.empty? ? [note] : index[name.sub(/\.md$/i, '').downcase]
            destination = candidates.size == 1 ? candidates.first : nil
            display = CGI.escapeHTML(label || (heading || name))
            if destination && embed.empty?
              note.data['note_links'] << destination.url unless note.data['note_links'].include?(destination.url)
              destination.data['backlinks'] << note unless destination.data['backlinks'].include?(note)
              url = site.baseurl.to_s + destination.url
              url += '#' + Jekyll::Utils.slugify(heading, mode: 'default') if heading
              %(<a class="note-link" href="#{CGI.escapeHTML(url)}">#{display}</a>)
            else
              %(<span class="note-unavailable">#{display}</span>)
            end
          end
        end.join
      end
      site.data['notes_graph'] = notes.map do |note|
        { title: note.data['title'], url: site.baseurl.to_s + note.url,
          category: note.data['category'], tags: Array(note.data['tags']), links: note.data['note_links'].map { |url| site.baseurl.to_s + url } }
      end
    end
  end
end
