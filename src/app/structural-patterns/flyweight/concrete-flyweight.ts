import { Delivery } from "./flyweight";

// ConcreteFlyweight: Represents an address that implements the Delivery interface.
export class Address implements Delivery {

    /* AddressBase Type: Defines the intrinsic state of an address,
       including street, neighborhood, and city. */
    constructor(private readonly addressBase: AddressBase) { }

    deliver(name: string, number: string): void {
        console.log(
            `Delivery for ${name} |
            At ${this.addressBase.street},  ${this.addressBase.neighborhood}, ${this.addressBase.city} |
            Number: ${number}`
        );
    }
}

export type AddressBase = {
    readonly street: string;
    readonly neighborhood: string;
    readonly city: string;
};