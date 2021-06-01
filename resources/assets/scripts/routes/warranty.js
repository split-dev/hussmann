export default {
  init() {
    function actions() {
      $('[data-clone-parent]')
        .off('click')
        .on('click', function () {
          let $parent = $(this).parent().parent();
          $parent.clone().insertAfter($parent);
          $parent.find('[data-del-parent]').removeClass('hidden');
          $(this).addClass('hidden');
          setTimeout(actions, 300);
      });
      $('[data-del-parent]')
        .off('click')
        .on('click', function () {
          $(this).parent().parent().remove();
          setTimeout(actions, 300);
      });
    }
    actions();

  //  Drag & Drop actions
    var i = 0;
    var reader = [];
    $('.drop-zone')
      .on('dragover', function() {
        $(this).addClass('drop-over');
        return false;
      })
      .on('dragleave', function() {
        $(this).removeClass('drop-over');
        return false;
      })
      .on('drop', function(e) {
        e.preventDefault();
        loadFromDesktop(e.originalEvent.dataTransfer.files[0], i);
        i++;
        return false;
      });

    $('#atteched-file').on('change', function () {
      let doc = $(this)[0].files[0];
      loadFromDesktop(doc, i);
      i++;
      return false;
    });

    function loadFromDesktop(file, i) {
      if (!file || file.type.indexOf('image/') !== 0) {
        alert('File is Not an Image');
      } else {
        reader[i] = new FileReader();
        reader[i].fileName = file.name;
        reader[i].onload = function (e) {
          let img = document.createElement('span');
          img.innerHTML = e.target.fileName;
          img.classList.add('ml-2');
          document.getElementById('file-name').appendChild(img);

          let extension = document.createElement('span');
          extension.innerHTML = e.target.fileName.split('.').pop();
          extension.classList.add('ml-2');
          document.getElementById('file-type').appendChild(extension);
        };
        reader[i].readAsDataURL(file);
      }
    }
  },
  finalize() {
  },
};
