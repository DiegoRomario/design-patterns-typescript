import { AccountType, InterestRate } from "./abstract-products";

// Abstract Factory
export interface BankingFactory {
    createAccountType(): AccountType;
    createInterestRate(): InterestRate;
}