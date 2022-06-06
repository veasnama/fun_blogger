document.addEventListener("DOMContentLoaded", function () {
  /**
   *
   * @module myapp
   */
  /** @namespace Namespace for SYSCHECK classes and functions*/

  var SYSCHECK = SYSCHECK || {};

  SYSCHECK.Person = class {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    get Name() {
      return this.name;
    }

    get Age() {
      return this.age;
    }

    get fullInfo() {
      return "My name is " + this.name + "And I am " + this.age;
    }
  };
  // SYSCHECK.dropbox = {
  //     drop_actions: () => {
  //         console.log("this function called")

  //         document.querySelectorAll('.file-droppable').forEach(function (droppable) {
  //             var originalText = droppable.querySelector('div').innerHTML;
  //             var input = droppable.querySelector('input');
  //             var fileChanged = function () {
  //                 var files = input.files;
  //                 if (files.length) {
  //                     droppable.querySelector('span').style.display = 'block';
  //                     droppable.querySelector('div').innerHTML = '';
  //                     for (var i = 0; i < files.length; i++) {
  //                         droppable.querySelector('div').innerHTML += files[i].name + '<br>';
  //                     }
  //                     droppable.classList.add('filled');
  //                 } else {
  //                     droppable.querySelector('div').innerHTML = originalText;
  //                     droppable.classList.remove('filled');
  //                     droppable.querySelector('span').style.display = 'none';
  //                 }
  //             };
  //             input.addEventListener('change', fileChanged);
  //             fileChanged(input);
  //             droppable.querySelector('span').addEventListener('click', function () {
  //                 input.value = '';
  //                 fileChanged(input);
  //             });
  //         });
  //     },
  // }

  // const person = new SYSCHECK.Person("Ma veasna", 23);
  // SYSCHECK.dropbox.drop_actions();

  // console.log(person.fullInfo);
  // console.log(person.Age);
  // console.log(person.Name);
  // drop box sections
  let isAdvancedUpload = (function () {
    var div = document.createElement("div");
    return (
      ("draggable" in div || ("ondragstart" in div && "ondrop" in div)) &&
      "FormData" in window &&
      "FileReader" in window
    );
  })();

  if (isAdvancedUpload) {
    var $form = $(".box");
    console.log("Browser supported.");
    $form.addClass("has-advanced-upload");
    var droppedFiles = false;
    $form
      .on(
        "drag dragstart dragend dragover dragenter dragleave drop",
        function (e) {
          e.preventDefault();
          e.stopPropagation();
        }
      )
      .on("dragover dragenter", function (e) {
        $form.addClass("is-dragover");
      })
      .on("dragleave dragend drop", function (e) {
        $form.removeClass("is-dragover");
      })
      .on("drop", function (e) {
        droppedFiles = e.originalEvent.dataTransfer.files;
      });
    $form.on("submit", function (e) {
      if ($form.hasClass("is-uploading")) return false;

      $form.addClass("is-uploading").removeClass("is-error");

      if (isAdvancedUpload) {
        e.preventDefault();

        var ajaxData = new FormData($form.get(0));

        if (droppedFiles) {
          $.each(droppedFiles, function (i, file) {
            ajaxData.append($input.attr("name"), file);
          });
        }

        $.ajax({
          url: $form.attr("action"),
          type: $form.attr("method"),
          data: ajaxData,
          dataType: "json",
          cache: false,
          contentType: false,
          processData: false,
          complete: function () {
            $form.removeClass("is-uploading");
          },
          success: function (data) {
            $form.addClass(data.success == true ? "is-success" : "is-error");
            if (!data.success) $errorMsg.text(data.error);
          },
          error: function () {
            // Log the error, show an alert, whatever works for you
          },
        });
      } else {
      }
    });
  } else {
    console.log("Browser not supported.");
  }
});
