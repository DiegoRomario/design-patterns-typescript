import { Component } from '@angular/core';
import { UserSessionManager } from './creational-patterns/singleton/singleton';
import { PayPalAdapter, StripeAdapter } from './structural-patterns/adapter/adapters';
import { PaymentClient } from './structural-patterns/adapter/client';
import { PayPalGateway, StripeGateway } from './structural-patterns/adapter/adaptees';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor() {
    // Usage
    const payPalGateway = new PayPalGateway();
    const stripeGateway = new StripeGateway();

    const paypalAdapter = new PayPalAdapter(payPalGateway);
    const stripeAdapter = new StripeAdapter(stripeGateway);

    const paypalClient = new PaymentClient(paypalAdapter);
    const stripeClient = new PaymentClient(stripeAdapter);

    paypalClient.processPayment(100); /* Output - PayPal: Checking for fraudulent action
                                     PayPal: Authorizing PayPal payment of $100
                                     PayPal: Processing PayPal payment of $100 */

    stripeClient.processPayment(150); /* Output - Stripe: Checking for fraudulent action
                                     Stripe: Authorizing Stripe payment of $150
                                     Stripe: Processing Stripe payment of $150 */
  }
}
