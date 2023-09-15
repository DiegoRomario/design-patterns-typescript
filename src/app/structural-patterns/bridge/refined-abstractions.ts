import { VideoPlayer } from "./abstraction";

// RefinedAbstraction: Extends the interface defined by Abstraction
export class NetflixPlayer extends VideoPlayer {
    override play(): void {
        console.log('Netflix Video:');
        super.play();
    }
}

export class PrimeVideoPlayer extends VideoPlayer {
    override play(): void {
        console.log('Prime Video:');
        super.play();
    }
}

