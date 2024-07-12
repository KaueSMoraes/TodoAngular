import { Component } from '@angular/core';

interface Todo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoKaue';
  newTodo: string = '';
  todos: Todo[] = [
    { task: 'Learn Angular', completed: false },
    { task: 'Build a ToDo App', completed: false }
  ];

  addTodo() {
    if (this.newTodo.trim().length > 0) {
      this.todos.push({ task: this.newTodo, completed: false });
      this.newTodo = '';
    }
  }

  toggleComplete(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
