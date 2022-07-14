import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { toogleAll } from '../todo.actions';
import { Todo } from '../models/todo.model';
import { AppState } from 'src/app/app.reducer';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
completado:boolean=false
todo!:Todo
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
  }
  toogleAll(){
    this.completado = !this.completado
    
    this.store.dispatch(toogleAll({completado:this.completado}))
    
  }

}
