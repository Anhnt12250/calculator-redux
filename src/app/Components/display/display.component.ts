import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CalculatorState } from 'src/states/calculator.state';
import * as CalculatorActions from 'src/actions/calculator.action'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  display = '';
  constructor(private store: Store<{'calculator': CalculatorState}>) {}
  ngOnInit(): void {
    this.store.subscribe(state => {
      this.display = state.calculator.currentValue;
    })
  }

  clear() {
    this.store.dispatch(CalculatorActions.clearCalculator());
  }
}
