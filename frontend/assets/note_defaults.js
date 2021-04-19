$(function() {

  if (typeof NOTE_DEFAULTS !== 'undefined') {

    var set_note_default = function(select) {
      var ntype = $(select).val();

      var ta = $(select).closest('div.subrecord-form-container').find('textarea')[0];
      var cm = $(ta).data('CodeMirror');

      if (!cm.getValue() || Object.values(NOTE_DEFAULTS).includes(cm.getValue())) {
        if (NOTE_DEFAULTS[ntype]) {
          cm.setValue(NOTE_DEFAULTS[ntype]);
        } else {
          cm.setValue('');
        }
      }
    };

    $(document).on('change', 'select.note-type', function (e) {
      set_note_default(this);
    });

    $(document).on('change', 'select.top-level-note-type', function (e) {
      set_note_default($(this).closest('div.subrecord-form-fields').find('select.note-type')[0]);
    });

  }

});

