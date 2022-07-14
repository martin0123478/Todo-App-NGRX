import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { toogle } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo!: Todo; 
  @ViewChild('inputFisico')
  txtInputFisico!: ElementRef;
  chkCompletado!: FormControl;
  txtInput!:FormControl
  editando:boolean = false;

  constructor(private store:Store<AppState>) { 
    
  }

  ngOnInit(): void {
    
    this.chkCompletado = new FormControl(this.todo.completado)
    this.txtInput = new FormControl(this.todo.texto,Validators.required)
    this.chkCompletado.valueChanges.subscribe(valor=>{
      this.store.dispatch(toogle({id:this.todo.id}))
    })
  }

  editar(){
    this.editando=true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
    
  }
  terminar(){
    this.editando=false
  }

}
