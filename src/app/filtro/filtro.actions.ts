import { createAction, props } from '@ngrx/store';
import { AppState } from '../todos/app.reducer';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export const setFiltro = createAction(
            '[Filtro Set Filtro] Increment',
            props<{ filtro: filtrosValidos }>()
);
