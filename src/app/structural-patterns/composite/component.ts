export type Position = { x: number; y: number };

// Component: Declares the interface for objects in the composition
export abstract class UIComponent {
    private position: Position;
    private parent: UIComponent | null = null;

    constructor(private name: string, initialPosition: Position) {
        this.position = initialPosition;
    }

    getName = (): string => this.name;
    getPosition = (): Position => this.position;
    setPosition = (newPosition: Position) => (this.position = newPosition);
    setParent = (parent: UIComponent) => this.parent = parent;
    getParent = (): UIComponent | null => this.parent;

    abstract add(component: UIComponent): void;
    abstract remove(component: UIComponent): void;
    abstract show(): void;
}
