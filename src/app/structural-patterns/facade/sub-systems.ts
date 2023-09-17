// Subsystem: A
export class HardwareDeviceA {
    initializeDeviceA = () => console.log("Hardware Device A: Initializing");
    readDataFromDeviceA = () => console.log("Hardware Device A: Reading data");
}

// Subsystem: B
export class HardwareDeviceB {
    initializeDeviceB = () => console.log("Hardware Device B: Initializing");
    sendDataToDeviceB = () => console.log("Hardware Device B: Sending data");
}

// Subsystem: C
export class HardwareDeviceC {
    initializeDeviceC = () => console.log("Hardware Device C: Initializing");
    performDeviceOperationC = () => console.log("Hardware Device C: Performing operation");
}