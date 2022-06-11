export function SelectFileEvent() {
  let inputs = document.querySelectorAll(".box__file");
  Array.prototype.forEach.call(inputs, (input) => {
    let label = input.nextElementSibling;
    var labelVal = label.innerHTML;

    input.addEventListener("change", function (e) {
      var file_name = "";
      console.log(this.files);
      if (this.files[0].name && this.files[0].length > 1) {
        file_name = (this.getAttribute("data-multiple-caption") || "").replace(
          "{count}",
          this.files.length
        );
        console.log(file_name);
      } else {
        file_name = e.target.value.split("\\").pop();
        console.log(file_name);
        console.log("condition met");
      }
      if (file_name) label.querySelector("span").innerHTML = file_name;
      else label.innerHTML = labelVal;
    });
  });
  // $("input[type=file]").change(function () {
  //   console.log(this.files[0]);
  //   console.log(this.files[0].name);
  // });
  // $("input[type=file").change(function () {
  //   var filePath = $(".box__file").val();
  //   console.log(filePath);
  // });
}
