import 'select2'

export default {
  init() {
    $('.select2').select2({
      theme: 'form-select',
      width: '100%',
      placeholder: function() {
        $(this).data('placeholder');
      },
    });
    $('.select2-selection__arrow').html('<svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 14 8"><g><g><path fill="#fff" d="M12.53 1.463l.364.364-5.788 5.788-6-6 .35-.351L7.094 6.9z"/><path fill="none" stroke="#000" stroke-miterlimit="50" stroke-width=".5" d="M12.53 1.463v0l.364.364v0L7.106 7.615v0l-6-6v0l.35-.351v0L7.094 6.9v0z"/></g></g></svg>');

  },
  finalize() {
  },
};
