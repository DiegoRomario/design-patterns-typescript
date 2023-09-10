// Adaptee A: Existing PayPal payment gateway interface
export class PayPalGateway {
    checkFraudulentAction() {
        console.log(`PayPal: Checking for fraudulent action`);
    }

    authorizePayment(amount: number) {
        console.log(`PayPal: Authorizing payment of $${amount}`);
    }

    processPayment(amount: number) {
        console.log(`PayPal: Processing payment of $${amount}`);
    }
}

// Adaptee B: Existing Stripe payment gateway interface
export class StripeGateway {
    checkFraudulentAction() {
        console.log(`Stripe: Checking for fraudulent action`);
    }

    authorizePayment(amount: number) {
        console.log(`Stripe: Authorizing payment of $${amount}`);
    }

    processPayment(amount: number) {
        console.log(`Stripe: Processing payment of $${amount}`);
    }
}
