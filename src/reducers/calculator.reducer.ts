import { createReducer, on } from '@ngrx/store';
import * as CalculatorActions from '../actions/calculator.action';
import { CalculatorState } from '../states/calculator.state';

const initialState: CalculatorState = {
    currentValue: '',
    previousValue: '',
    operation: ''
}

export const calculatorReducer = createReducer(
    initialState,
    on(CalculatorActions.inputNumber, (state, action) => {
        let currentState : CalculatorState = {...state};
        if(action.number === '.') {
            if(!state.currentValue.includes('.')) {
                currentState.currentValue = state.currentValue + action.number;
            }
        }
        else {
            if(currentState.currentValue.match(/[+|-|*|/]/))
                currentState.currentValue = action.number;
            else
                currentState.currentValue = state.currentValue + action.number;
        }
        return currentState;
    }),
    on(CalculatorActions.inputOperator, (state, action) => {
        let currentState: CalculatorState = {...state};
        if(action.operator === '+') {
            currentState.previousValue = state.currentValue;
            currentState.currentValue = '+';
            currentState.operation = '+';
        }
        else if(action.operator === '-') {
            currentState.previousValue = state.currentValue;
            currentState.currentValue = '-';
            currentState.operation = '-';
        }
        else if(action.operator === '*') {
            currentState.previousValue = state.currentValue;
            currentState.currentValue = '*';
            currentState.operation = '*';
        }
        else if(action.operator === '/') {
            currentState.previousValue = state.currentValue;
            currentState.currentValue = '/';
            currentState.operation = '/';
        }
        return currentState;
    }),
    on(CalculatorActions.calculateNumber, (state, action) => {
        let currentState : CalculatorState = {...state};
        if(currentState.operation === '+') {
            currentState.currentValue = (parseFloat(state.previousValue) + parseFloat(state.currentValue)).toString();
            currentState.operation = '';
            currentState.previousValue = '';
        }
        if(currentState.operation === '-') {
            currentState.currentValue = (parseFloat(state.previousValue) - parseFloat(state.currentValue)).toString();
            currentState.operation = '';
            currentState.previousValue = '';
        }
        if(currentState.operation === '*') {
            currentState.currentValue = (parseFloat(state.previousValue) * parseFloat(state.currentValue)).toString();
            currentState.operation = '';
            currentState.previousValue = '';
        }
        if(currentState.operation === '/') {
            currentState.currentValue = (parseFloat(state.previousValue) / parseFloat(state.currentValue)).toString();
            currentState.operation = '';
            currentState.previousValue = '';
        }
        return currentState;        
    }),
    on(CalculatorActions.clearCalculator, (state, action) => {
        let currentState: CalculatorState = {...state}
        currentState.currentValue = '';
        currentState.operation = '';
        currentState.previousValue = '';
        return currentState; 
    })
);

