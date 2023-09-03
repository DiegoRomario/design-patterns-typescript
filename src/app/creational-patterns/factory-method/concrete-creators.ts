import { OracleProvider, SQLProvider } from "./concrete-products";
import { IDatabaseProviderFactory } from "./creator";

/* Concrete Creator A: Overrides the factory method 
   to return an instance of a Product A */
export class SQLProviderFactory implements IDatabaseProviderFactory {
    createDatabaseProvider() {
        return new SQLProvider();
    }
}
/* Concrete Creator B: Overrides the factory method 
   to return an instance of Product B */
export class OracleProviderFactory implements IDatabaseProviderFactory {
    createDatabaseProvider() {
        return new OracleProvider();
    }
}
