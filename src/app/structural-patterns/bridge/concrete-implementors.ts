import { Resolution } from "./implementor";

// ConcreteImplementor: The actual implementation of the Implementor
export class HDResolution implements Resolution {
    processVideo(): void {
        console.log('Processing video for HD resolution...');
    }
}
export class FourKResolution implements Resolution {
    processVideo(): void {
        console.log('Processing video for 4K resolution...');
    }
}
