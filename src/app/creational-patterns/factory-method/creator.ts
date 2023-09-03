import { IDatabaseProvider } from "./product";

/* Creator: Declares the factory method
   which returns an object of type Product. */
export interface IDatabaseProviderFactory {
    createDatabaseProvider(): IDatabaseProvider;
}
