// Abstract Product A
export interface AccountType {
    getDescription(): string;
}

// Abstract Product B
export interface InterestRate {
    getRate(): number;
}