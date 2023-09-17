// $("form[name=signup_form").submit(function(e) {
//   var $form = $(this);
//   var $error = $form.find(".error");
//   var data = $form.serialize();
//   $.ajax({
//     url: "/user/signup",
//     type: "POST",
//     data: data,
//     dataType: "json",
//     success: function(resp) {
//       window.location.href = "/dashboard/";
//     },
//     error: function(resp) {
//       console.log(resp);
//     }
//   });
//   e.preventDefault();
// });

// $("form[name=login_form").submit(function(e) {
//   var $form = $(this);
//   var $error = $form.find(".error");
//   var data = $form.serialize();
//   $.ajax({
//     url: "/user/login",
//     type: "POST",
//     data: data,
//     dataType: "json",
//     success: function(resp) {
//       window.location.href = "/dashboard/";
//     },
//     error: function(resp) {
//       $error.text(resp.responseJSON.error).removeClass("error--hidden");
//     }
//   });
//   e.preventDefault();
// });


// const buttons = document.querySelectorAll('.highlight-button');
// buttons.forEach((button) => {
//   button.addEventListener('click', () => {
//     // Remove the 'btn-highlight' class from all buttons
//     buttons.forEach((btn) => {
//       btn.classList.remove('btn-highlight');
//     });
//     // Add the 'btn-highlight' class to the clicked button
//     button.classList.add('btn-highlight');
//   });
// });

$("form[name=signup_form").submit(function(e) {

  var $form = $(this);
  var $error = $form.find(".error");
  var data = $form.serialize();

  $.ajax({
    url: "/user/signup",
    type: "POST",
    data: data,
    dataType: "json",
    success: function(resp) {
      window.location.href = "/dashboard/";
    },
    error: function(resp) {
      $error.text(resp.responseJSON.error).removeClass("error--hidden");
    }
  });

  e.preventDefault();
});

$("form[name=login_form").submit(function(e) {

  var $form = $(this);
  var $error = $form.find(".error");
  var data = $form.serialize();

  $.ajax({
    url: "/user/login",
    type: "POST",
    data: data,
    dataType: "json",
    success: function(resp) {
      window.location.href = "/dashboard/";
    },
    error: function(resp) {
      $error.text(resp.responseJSON.error).removeClass("error--hidden");
    }
  });

  e.preventDefault();
});