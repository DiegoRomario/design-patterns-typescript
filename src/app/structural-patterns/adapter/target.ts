// Target: Client's expected interface
export interface PaymentProcessor {
    analyzeFraudulentAction(): void;
    authorizePayment(amount: number): void;
    confirmPayment(amount: number): void;
}