import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  valueInput = new FormControl(0);
  listSymbol: string[] = ['/', '*', '+', '-'];

  getNumber(target: number): void {
    if (this.valueInput !== null) {
      const currentValue = this.valueInput.value as number;
      const updatedValue = currentValue * 10 + target;
      this.valueInput.setValue(updatedValue);
    }
  }

  resetInput() {
    this.valueInput.reset();
  }

  // l'erreur est ici please 🥲🥲🥲🥲🥲
  getSymbol(symbol: string): void {
    if (this.listSymbol.includes(symbol)) {
      const currentValue = this.valueInput.value;
      if (currentValue !== null) {
        const updatedValue = currentValue + symbol;
        // cette ligne 
        // this.valueInput.setValue(updatedValue);
      }
    }
  }
}
