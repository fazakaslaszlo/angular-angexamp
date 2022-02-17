import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  inputTodo:String = "";

  constructor() {}

  ngOnInit() {
    this.todos = [
      {
        content: 'Todo 1',
        completed: true,
      },

      {
        content: 'Todo 2',
        completed: false,
      },

      {
        content: 'Todo 3',
        completed: false,
      },
    ];
  }

  toggleTodo(rowNumber: number) {
    this.todos.map((v, i) => {
      if (i == rowNumber) v.completed = !v.completed;

      return v;
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo(){
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })  
    
    this.inputTodo = "";
  }
}
