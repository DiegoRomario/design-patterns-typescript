import { Component } from '@angular/core';
import { HardwareInteractionFacade } from './structural-patterns/facade/facade';
import { HardwareDeviceA, HardwareDeviceB } from './structural-patterns/facade/sub-systems';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor() {

    const deviceA = new HardwareDeviceA();
    const deviceB = new HardwareDeviceB();
    const hardwareFacade = new HardwareInteractionFacade(deviceA, deviceB);

    // Initialize and perform hardware operation using the facade
    hardwareFacade.initializeHardware();
    hardwareFacade.performHardwareOperation();
    /* Output:
        Hardware Device A: Initializing
        Hardware Device B: Initializing
        Hardware Device C: Initializing
        Hardware Device A: Reading data
        Hardware Device B: Sending data
        Hardware Device C: Performing operation */
  }
}
