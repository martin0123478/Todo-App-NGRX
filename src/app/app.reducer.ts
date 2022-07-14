import { ActionReducerMap } from "@ngrx/store";
import { filtrosValidos } from "./filtro/flitro.actions";
import { Todo } from "./todos/models/todo.model";
import { todoReducer } from "./todos/todo.reducer";
import { filtroReducer } from './filtro/filtro.reducer';
import { Actions } from '@ngrx/store-devtools/src/reducer';

export interface AppState{
  todos:Todo[],
  filtro:filtrosValidos
}

export const appReducers: ActionReducerMap<AppState,Actions> ={
  todos:todoReducer,
  filtro:filtroReducer

}