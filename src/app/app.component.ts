import { Component } from '@angular/core';
import { NetflixPlayer, PrimeVideoPlayer } from './structural-patterns/bridge/refined-abstractions';
import { FourKResolution, HDResolution } from "./structural-patterns/bridge/concrete-implementors";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor() {
    // Usage
    const resolutionHD = new HDResolution();
    const resolution4K = new FourKResolution();

    const netflixHD = new NetflixPlayer(resolutionHD);
    netflixHD.play();
    // Output - Netflix Video: Processing video for HD resolution... Streaming video...

    const netflix4K = new NetflixPlayer(resolution4K);
    netflix4K.play();
    // Output - Netflix Video: Processing video for 4K resolution... Streaming video...

    const primeVideoHD = new PrimeVideoPlayer(resolutionHD);
    primeVideoHD.play();
    // Output - Prime Video: Processing video for HD resolution... Streaming video...

    const primeVideo4K = new PrimeVideoPlayer(resolution4K);
    primeVideo4K.play();
    // Output - Prime Video: Processing video for 4K resolution... Streaming video...
  }
}
