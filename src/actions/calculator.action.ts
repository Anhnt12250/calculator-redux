import { createAction, props } from "@ngrx/store";

export const inputNumber = createAction(
    '[Calculator] Input number',
    props<{ number: string }>()
);
export const inputOperator = createAction(
    '[Calculator] Input operator',
    props<{ operator: string }>()
);
export const calculateNumber = createAction(
    '[Calculator] Calculate number',
);
export const clearCalculator = createAction(
    '[Calculator] Clear calculator'
);
