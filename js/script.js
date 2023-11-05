jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});


var form = document.getElementById('form');

// alert for form completion
function alertFunction() {
  if (form.checkValidity()) {
    alert("You have now signed up!");
  }