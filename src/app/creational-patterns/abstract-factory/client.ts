import { BankingFactory } from "./abstract-factory";

// Client Code
export function displayAccountDetails(factory: BankingFactory) {
    const accountType = factory.createAccountType();
    const interestRate = factory.createInterestRate();
    console.log(`${accountType.getDescription()} with ${interestRate.getRate()}% interest rate`);
}