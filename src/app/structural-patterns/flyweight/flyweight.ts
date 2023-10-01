/* Flyweight: Interface through which flyweights
   can receive and act on extrinsic state. */
export interface Delivery {
    deliver(name: string, number: string): void;
}