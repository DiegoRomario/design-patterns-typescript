import { Component } from '@angular/core';
import { displayAccountDetails } from './creational-patterns/abstract-factory/client'
import { BasicBankingFactory, PremiumBankingFactory } from './creational-patterns/abstract-factory/concrete-factories';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  basicFactory = new BasicBankingFactory();
  premiumFactory = new PremiumBankingFactory();

  constructor() {
    displayAccountDetails(this.basicFactory); // Output: Checking Account with 0.05% interest rate
    displayAccountDetails(this.premiumFactory); // Output: Savings Account with 0.09% interest rate
  }
}
