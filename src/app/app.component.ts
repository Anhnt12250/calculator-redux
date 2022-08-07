import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CalculatorState } from 'src/states/calculator.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';
  calculatorState$: Observable<CalculatorState>;
  constructor(private store: Store<{'calculator': CalculatorState}>) {
    this.calculatorState$ = this.store.select('calculator');
  }
}
