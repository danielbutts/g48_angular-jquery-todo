$('form').submit(submitForm);
$(document).keyup(checkForm);
$('#category').change(checkForm);

function submitForm(e) {
  e.preventDefault();
  let task = $('#task').val();
  let category = $('#category').val();
  addTask(task, category);
  setTaskCount($('ul').children().length);
  $('#task').val('');
  $('#category').val('');
}

function addTask(task, category) {
  $('ul').append(`<li>${task}<span class="badge alert-success">${category}</span>
    <a class="delete-button"><span class="remove-me badge alert-danger">Remove Me</span></a></li>`);
  $(`#tasks`).on('click', '.delete-button', deleteTask);
}

function checkForm() {
  console.log('val',$('#category').val(),$('#task').val());
  if ($('#task').val() !== '' && $('#category').val() !== '') {
    console.log('yay');
    $('button').prop("disabled", false);
  } else {
    console.log('nope');
    $('button').prop("disabled", true);
  }
}

function deleteTask(e) {
  e.preventDefault();
  let item = e.target.closest('li');
  item.remove();
  setTaskCount($('ul').children().length);
}

function setTaskCount(num) {
  $('#taskCount').empty();
  $('#taskCount').append(num);
}
