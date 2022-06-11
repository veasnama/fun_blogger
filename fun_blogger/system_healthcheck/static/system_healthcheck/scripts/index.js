import { SelectFileEvent } from "./event_handler.js";
document.addEventListener("DOMContentLoaded", function () {
  /**
   *
   * @module myapp
   */
  /** @namespace Namespace for SYSCHECK classes and functions*/
  // Event Handler call
  SelectFileEvent();
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

  SYSCHECK.helper = {
    showFiles: (files) => {
      console.log(files[0].path);
      var form = document.querySelector(".box");
      var label = form.querySelector(" label ");
      label.textContent = files[0]["name"];
    },
  };
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

        droppedFiles = e.originalEvent.dataTransfer.files;
        SYSCHECK.helper.showFiles(droppedFiles);
      })
      .on("drop", function (e) {
        // droppedFiles = e.originalEvent.dataTransfer.files;
        // console.log(e.originalEvent.dataTransfer.files[0].name);
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
