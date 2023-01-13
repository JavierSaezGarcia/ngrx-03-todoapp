

import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as acciones from './todo.actions';

export const estadoInicial:Todo[] = [
    new Todo('Ir de Compras'),
    new Todo('Pasar la ITV el jueves'),
    new Todo('Hacer la comida'),
    new Todo('Hacer ejercicio'),
    new Todo('Bajar la basura')
];

const _todoReducer = createReducer(
    estadoInicial,
    on(acciones.crear, (state, { texto }) => [...state, new Todo( texto )] ),
    on(acciones.limpiarTodos, (state) => state.filter( todo => !todo.completado ) ),
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
    }),
    on(acciones.editar, (state, { id, texto }) => {
        return state.map( todo => {
            if( todo.id === id ){
                return {
                    ...todo,
                    texto: texto
                }
            }
            return todo;  
        });
    }),
    on(acciones.borrar, (state, { id }) => state.filter( todo => todo.id !== id)),
    on(acciones.toggleAll, ( state, { completado }) => state.map( todo => {
        return {
            ...todo,
            completado: completado
        }
    }))
);

export function todoReducer( state: Todo[] = estadoInicial, action: Action){
    return _todoReducer( state, action );
}