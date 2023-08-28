import { BankingFactory } from "./abstract-factory";
import { CheckingAccount, HighInterestRate, LowInterestRate, SavingsAccount } from "./concrete-products";

// Concrete Factory 1
export class BasicBankingFactory implements BankingFactory {
    createAccountType() {
        return new CheckingAccount();
    }
    createInterestRate() {
        return new LowInterestRate();
    }
}

// Concrete Factory 2
export class PremiumBankingFactory implements BankingFactory {
    createAccountType() {
        return new SavingsAccount();
    }
    createInterestRate() {
        return new HighInterestRate();
    }
}