

import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as acciones from './todo.actions';

export const estadoInicial:Todo[] = [
    new Todo('Comprar pan'),
    new Todo('Pasar la ITV el jueves'),
    new Todo('Hacer la comida'),
    new Todo('Hacer ejercicio')
];

const _todoReducer = createReducer(
    estadoInicial,
    on(acciones.crear, (state, { texto }) => [...state, new Todo( texto )] ),
    on(acciones.toggle, (state, { id }) => {
        return state.map( todo => {
            if( todo.id === id ){
                return {
                    ...todo,
                    completado: !todo.completado
                }
            }
            return todo;
            
            
            
        })
    } )
);

export function todoReducer( state: Todo[] = estadoInicial, action: Action){
    return _todoReducer( state, action );
}