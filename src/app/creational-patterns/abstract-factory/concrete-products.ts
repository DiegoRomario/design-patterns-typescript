import { AccountType, InterestRate } from "./abstract-products";

// Concrete Product A1
export class CheckingAccount implements AccountType {
    getDescription() {
        // some business logic goes here
        return "Checking Account";
    }
}

// Concrete Product A2
export class SavingsAccount implements AccountType {
    getDescription() {
        // some business logic goes here
        return "Savings Account";
    }
}

// Concrete Product B1
export class LowInterestRate implements InterestRate {
    getRate() {
        // some business logic goes here
        return 0.05;
    }
}

// Concrete Product B2
export class HighInterestRate implements InterestRate {
    getRate() {
        // some business logic goes here
        return 0.09;
    }
}