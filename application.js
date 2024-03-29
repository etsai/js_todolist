$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    // Bind functions which add, remove, and complete todos to the appropriate
    // elements
    $('.add').on("click", function(e){
      e.preventDefault()
      var item = $('#task_item').val()
      $('.todo_list').append(buildTodo(item));
      $('#task_item').val("")
    });

    $('.todo_list').on("click", ".delete", function(e){
      e.preventDefault()
      $(this).closest('.todo').remove();
    });

    $('.todo_list').on("click", ".complete", function(e){
      e.preventDefault()
      $(this).closest('.todo').find('h2').css({"text-decoration": "line-through", "color": "grey"})
    });
  };

  // Adds item to todo list
  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  };

  bindEvents();
});
