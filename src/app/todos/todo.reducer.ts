

import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as acciones from './todo.actions';

export const estadoInicial:Todo[] = [];

const _todoReducer = createReducer(
    estadoInicial,
    on(acciones.crear, (state, { texto }) => [...state, new Todo( texto )] )
);

export function todoReducer( state: Todo[] = estadoInicial, action: Action){
    return _todoReducer( state, action );
}