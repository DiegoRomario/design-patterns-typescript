import { IDatabaseProvider } from "./product";

// Concrete Product A: implements the Product interface
export class SQLProvider implements IDatabaseProvider {
    connect() {
        console.log('Connecting to SQL Server');
    }

    runQuery(query: string) {
        console.log(`Executing SQL Server query: ${query}`);
    }
}
// Concrete Product B: implements the Product interface
export class OracleProvider implements IDatabaseProvider {
    connect() {
        console.log('Connecting to Oracle');
    }

    runQuery(query: string) {
        console.log(`Executing Oracle query: ${query}`);
    }
}
