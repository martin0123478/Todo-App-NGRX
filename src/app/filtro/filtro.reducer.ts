import { createReducer, on } from '@ngrx/store';
import { Actions } from '@ngrx/store-devtools/src/reducer';
import { setFiltro, filtrosValidos,  } from './flitro.actions';


export const initialState:filtrosValidos = 'todos';

export const filtroReducer = createReducer<filtrosValidos,Actions>(
  initialState,
  on(setFiltro, (state,{filtro}) => filtro),
  
  
);