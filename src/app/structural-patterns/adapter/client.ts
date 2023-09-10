import { PaymentProcessor } from "./target";
import { PayPalAdapter, StripeAdapter } from "./adapters";

// Client
export class PaymentClient {
    constructor(private paymentProcessor: PaymentProcessor) { }

    processPayment(amount: number) {
        this.paymentProcessor.analyzeFraudulentAction();
        this.paymentProcessor.authorizePayment(amount);
        this.paymentProcessor.confirmPayment(amount);
    }
}
