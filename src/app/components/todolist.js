// var todoList = {
//     todos: [],
//     displayTodos: function() {
//     if (this.todos.length === 0) {
//         console.log('no todos')
//     } else {
//     console.log('My todos:');
//     for (var i = 0; i < this.todos.length; i++) {
//         if(this.todos[i].completed === true) {
//         console.log('(x)', this.todos[i].todoText);
//         } else {
//         console.log('( )', this.todos[i].todoText);
//         }
//         }
//     }
//     },
// addTodo: function(todoText) {
//     this.todos.push({
//         todoText: todoText,
//         completed: false
//     });
//     this.displayTodos();
//     },
//     deleteTodo: function(position) {
//     this.todos.splice(position, 1)
//     this.displayTodos();
//     },
//     changeTodo: function(position, todoText) {
//     this.todos[position].todoText = todoText;
//     this.displayTodos();
//     },
//     toggleCompleted: function(position) {
//     var todo = this.todos[position];
//     todo.completed = !todo.completed;
//     this.displayTodos();
//     },
//     toggleAll: function() {
//     var totalTodos = this.todos.length;
//     var completedTodos = 0;

//     for (var i = 0; i < totalTodos; i++) {
//         if (this.todos[i].completed === true) {
//         completedTodos++;
//         }
//     }
//     if (completedTodos === totalTodos) {
//         for (var i = 0; i < totalTodos; i++) {
//         this.todos[i].completed = false;
//         }
//         } else {
//         for (var i = 0; i < totalTodos; i++) {
//             this.todos[i].completed = true;
//         }
//         }
//     this.displayTodos();
//     }
// };

// var handlers = {
//     displayTodos:  function() {
//     todoList.displayTodos();
//     },
//     toggleAll: function() {
//     todoList.toggleAll();
//     },
//     addTodo: function() {
//     var todoName = document.getElementById('addTodoText');
//         todoList.addTodo(todoName.value);
//     todoName.value = '';
//     },
//     changeTodo: function() {
//     var changePositionInput = document.getElementById('changePositionInput');
//     var changeTextInput = document.getElementById('changeTextInput');
//     todoList.changeTodo(changePositionInput.valueAsNumber, changeTextInput.value);
//     changePositionInput.value = '';
//     changeTextInput.value = '';
//     },
//     deleteTodo: function() {
//     var deletePosition = document.getElementById('deletePosition');
//     todoList.deleteTodo(deletePosition.valueAsNumber);
//     deletePosition.value = '';
//     },
//     toggleCompleted: function() {
//     var togglePosition = document.getElementById('togglePosition');
//     todoList.toggleCompleted(togglePosition.value);

//     }
// };
