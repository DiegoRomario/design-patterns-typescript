/* Product: Defines the interface of objects 
   the factory method creates */
export interface IDatabaseProvider {
    connect(): void;
    runQuery(query: string): void;
}
