import { DeliveryFactory } from "./flyweight-factory";

// Client: Function to simulate delivery requests and manage extrinsic state.
export const requestDelivery = function (
    factory: DeliveryFactory,
    name: string,
    number: string,
    street: string,
    neighborhood: string,
    city: string
): void {
    const location = factory.createAddress({ street, neighborhood, city });
    location.deliver(name, number);
};
