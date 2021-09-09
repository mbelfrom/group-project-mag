//When the user clicks the retrieve button a modal carousel is displayed
$("#launchModal").click(function () {
  $(".modal").addClass("is-active");
});

$(".modal-close").click(function () {
  $(".modal").removeClass("is-active");
});

$("#close-btn").click(function () {
  $(".modal").removeClass("is-active");
});

//User Access to local storage
