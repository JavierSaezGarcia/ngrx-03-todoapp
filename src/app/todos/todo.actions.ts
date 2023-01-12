import { createAction, props } from '@ngrx/store';

export const crear = createAction(
    '[Todo Component] Crear todo',
    props<{texto: string}>()
);
