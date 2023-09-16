import { Position, UIComponent } from "./component";

// Leaf: Represents leaf objects in the composition (A leaf has no children)
export class UIButton extends UIComponent {
    constructor(name: string, initialPosition: Position, private label: string) {
        super(name, initialPosition);
    }

    show(): void {
        const { x, y } = this.getPosition();
        let indentation = '';
        let currentComponent: UIComponent | null = this;

        while (currentComponent !== null) {
            indentation = '-' + indentation;
            currentComponent = currentComponent.getParent();
        }

        console.log(`${indentation} ${this.getName()} Button "${this.label}" at (${x}, ${y})`);
    }

    add(component: UIComponent): void {
        // Not applicable for Leaf components
    }

    remove(component: UIComponent): void {
        // Not applicable for Leaf components
    }
}