import { IGraphic } from "./subject";

// RealSubject - Represents the real image
export class Image implements IGraphic {
    draw(): void {
        console.log("▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓");
        console.log("▓                  ▓");
        console.log("▓ Hey Ho! Let's Go ▓");
        console.log("▓                  ▓");
        console.log("▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓");
    }

    load(): void {
        console.log("Loading the image...");
    }
}
