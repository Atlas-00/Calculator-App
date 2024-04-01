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

  /**
   * l'erreur est ici please 🥲🥲🥲🥲🥲
   * Ici je récupère une symbol/opérateur et l'ajoute au valueInput mais j'ai cette erreur à la ligne 39 "L'argument de type 'string' n'est pas attribuable au paramètre de type 'number'." et je sais pas comment la corriger ! (Peut être que je m'y prends mal)
   * @param symbol
   */
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
