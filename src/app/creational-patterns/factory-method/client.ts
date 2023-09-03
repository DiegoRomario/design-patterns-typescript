import { IDatabaseProviderFactory } from "./creator";
import { IDatabaseProvider } from "./product";

/* Client: This is not a standard participant in the Factory Method pattern.
   It's an additional class used to demonstrate how
   the created database providers can be utilized */
export class ClientDBProvider {
    private readonly databaseProvider: IDatabaseProvider;

    constructor(factory: IDatabaseProviderFactory) {
        this.databaseProvider = factory.createDatabaseProvider();
    }

    connect() {
        this.databaseProvider.connect();
    }

    execQuery(query: string) {
        this.databaseProvider.runQuery(query);
    }
}
