import { IGraphic } from "./subject";
import { Image } from "./real-subject";

// Proxy - Controls access to the RealSubject
export class ImageProxy implements IGraphic {
    private image: Image | null = null;

    draw(): void {
        this.image ??= this.load();
        this.image.draw();
    }

    load(): Image {
        if (!this.image) {
            this.image = new Image();
            this.image.load();
        }
        return this.image;
    }
}
