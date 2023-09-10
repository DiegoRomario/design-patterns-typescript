import { PayPalGateway, StripeGateway } from './adaptees';
import { PaymentProcessor } from './target';

// Adapter A: for PayPal
export class PayPalAdapter implements PaymentProcessor {
    constructor(private paypalGateway: PayPalGateway) {
        this.paypalGateway = new PayPalGateway();
    }

    analyzeFraudulentAction() {
        this.paypalGateway.checkFraudulentAction();
    }

    authorizePayment(amount: number) {
        this.paypalGateway.authorizePayment(amount);
    }

    confirmPayment(amount: number) {
        this.paypalGateway.processPayment(amount);
    }
}

// Adapter B: for Stripe
export class StripeAdapter implements PaymentProcessor {
    constructor(private stripeGateway: StripeGateway) {
        this.stripeGateway = new StripeGateway();
    }

    analyzeFraudulentAction() {
        this.stripeGateway.checkFraudulentAction();
    }

    authorizePayment(amount: number) {
        this.stripeGateway.authorizePayment(amount);
    }

    confirmPayment(amount: number) {
        this.stripeGateway.processPayment(amount);
    }
}
