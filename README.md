# tns_as_note_defaults
An ArchivesSpace plugin that allows configurable default text by note type.

## Configuration

Set the default value for each note type in `config.rb` like this:

```ruby
  AppConfig[:note_defaults] = {
    'prefercite' => 'Our citation template',
    'accessrestrict' => 'Our access restriction note',
  }
```

The keys to this hash are values from the `note_multipart_type` enumeration.
