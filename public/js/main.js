// https://api.jquery.com/submit/
// https://developer.mozilla.org/en-US/docs/Web/API/FormData

$('#Contact-form').submit((e) => {
  e.preventDefault();
  $.post('/contact', $(e.target).serialize())
    .done((data) => {
      $(e.target).replaceWith(`<h4>${data}</h4>`);
    })
    .fail((err) => {
      $('#Contact-output').html(`<h4 class="text-danger">${err.responseText}</h4>`);
    });
});
