import { Address, AddressBase } from "./concrete-flyweight";
import { Delivery } from "./flyweight";

export type DeliveryAddressDictionary = { [k: string]: Address; };

// FlyweightFactory: Manages the creation and sharing of addresses
export class DeliveryFactory {
    // A dictionary to store shared addresses.
    private addressDictionary: DeliveryAddressDictionary = {};

    // Generate a unique ID for an address based on intrinsic state.
    private generateID(data: AddressBase): string {
        const { street, neighborhood, city } = data;
        return `${street}_${neighborhood}_${city}`.toLowerCase();
    }

    // Create an address, either new or shared.
    createAddress(addressBase: AddressBase): Delivery {
        const key = this.generateID(addressBase);

        if (key in this.addressDictionary) {
            console.log('Shared Address');
            return this.addressDictionary[key];
        }

        console.log('New Address');
        this.addressDictionary[key] = new Address(addressBase);
        return this.addressDictionary[key];
    }

    // Get the dictionary of shared addresses.
    getAddress(): DeliveryAddressDictionary {
        return this.addressDictionary;
    }
}
