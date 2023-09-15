import { Resolution } from "./implementor";

// Abstraction
export class VideoPlayer {
    // reference to the Implementor object.
    protected resolution: Resolution;

    constructor(resolution: Resolution) {
        this.resolution = resolution;
    }

    play(): void {
        this.resolution.processVideo();
        console.log('Streaming video...');
    }
}
