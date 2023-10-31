import { IGraphic } from "./subject";
import { ImageProxy } from "./proxy";

// Client - Uses the Proxy to access the RealSubject
export class DocumentClient {
    private graphic: IGraphic | null = null;

    print(): void {
        this.graphic = new ImageProxy();
        console.log("Here is the document");
        console.log("The image is:");
        this.graphic.draw();
    }
}

