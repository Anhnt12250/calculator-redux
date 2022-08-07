import { Component, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CalculatorState } from 'src/states/calculator.state';
import * as CalculatorActions from 'src/actions/calculator.action';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  calculatorState$: Observable<CalculatorState>;
  constructor(private store: Store<{'calculator': CalculatorState}>) { }

  ngOnInit(): void {
    this.calculatorState$ = this.store.select('calculator');
  }

  inputNumber(number: string) {
    this.store.dispatch(CalculatorActions.inputNumber({number}));
  }

  inputOperator(operator: string) {
    this.store.dispatch(CalculatorActions.inputOperator({operator}));
  }

  calculate() {
    this.store.dispatch(CalculatorActions.calculateNumber());
  }

  clear() {
    this.store.dispatch(CalculatorActions.clearCalculator());
  }
}
