import { HardwareDeviceA, HardwareDeviceB, HardwareDeviceC } from "./sub-systems";

// Facade: Provides a simplified, high-level interface to a set of subsystems.
export class HardwareInteractionFacade {
    private deviceA: HardwareDeviceA;
    private deviceB: HardwareDeviceB;
    private deviceC: HardwareDeviceC;

    constructor(deviceA: HardwareDeviceA, deviceB: HardwareDeviceB) {
        this.deviceA = deviceA;
        this.deviceB = deviceB;
        this.deviceC = new HardwareDeviceC(); // the third is instantiated internally
    }

    /* Note: It may not always be feasible to receive a subsystem abstraction
       from the constructor via dependency injection. Occasionally, manual 
       instantiation of a subsystem within the facade might be necessary. */

    // Coordinates the initialization of subsystems
    initializeHardware(): void {
        this.deviceA.initializeDeviceA();
        this.deviceB.initializeDeviceB();
        this.deviceC.initializeDeviceC();
    }

    // Coordinates the operation steps of subsystems
    performHardwareOperation(): void {
        this.deviceA.readDataFromDeviceA();
        this.deviceB.sendDataToDeviceB();
        this.deviceC.performDeviceOperationC();
    }
}
