var form = document.querySelector('form');
    var todoList = document.querySelector('ul');
    var button = document.querySelector('button');
    var input = document.getElementById('user-todo');
    

    // Declare variable `todosArray` to hold our todos.
    // We want to ask if there are already `todos` in localStorage. If so, then we will get
    // those `todos` using JSON.parse. If local storage does not have any `todos` then we will
    // set our `todosArray` to an empty array. We want to save many values not just one!
    // var todosArray = []; we write it the following way because we need a conditional for when we open the page, 
    // it will look through the local storage and call the items even when we refresh the page 
    // if there is nothing, : then it will create an empty array with the key of "todos"
    var todosArray = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

    // use localStorage setItem() method to set `todos` to a string with `JSON.stringify()`
      // JSON.stringify() is used because localStorage works with strings. This is how
      // we send data to localStorage.
    localStorage.setItem('todos', JSON.stringify(todosArray));

    // Declare a variable `storage` that contains all the information in localStorage.
      // We will assign to `storage` JSON.parse() method that converts strings from local
      // storage into data we can access with JavaScript.
      // When receiving data from a web server, the data is always a string.
      // Parse the data with JSON.parse(), and the data becomes a JavaScript object.
    var storage = JSON.parse(localStorage.getItem('todos'));


    form.addEventListener('submit', function (e) {
      e.preventDefault();


      // push onto `todosArray` the `input.value`
      todosArray.push(input.value);
      // on localStorage now use `setItem()` for the key `'todos'` the value
        // of the todosArray as a string with the `JSON.stringify()` method.
      localStorage.setItem('todos', JSON.stringify(todosArray));
      todoMaker(input.value);
      input.value = "";
    });

    var todoMaker = function(text) {
      var todo = document.createElement('li');
      todo.textContent = text;
      todoList.appendChild(todo);
    }

    // Loop through localStorage when a user first opens a page and run the todoMaker function
    for (var i = 0; i < storage.length; i++) {
      todoMaker(storage[i]);
    }

    button.addEventListener('click', function() {

      // clear the `localStorage` with the `clear()` method, use a while loop to avoid the double process of erasing from the local storage
      localStorage.clear();
      while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
      }
    })