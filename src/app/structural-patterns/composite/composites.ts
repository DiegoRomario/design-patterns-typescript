import { Position, UIComponent } from "./component";

// Composite: Defines behavior for components having children and stores child components.
export class UITab extends UIComponent {
    private children: UIComponent[] = [];

    constructor(name: string, initialPosition: Position) {
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

        console.log(`${indentation} ${this.getName()} Tab "${this.getName()}" at (${x}, ${y})`);

        this.children.forEach((component) => {
            component.show(); // Show child components recursively
        });
    }

    add(component: UIComponent): void {
        component.setParent(this);
        this.children.push(component);
    }

    remove(component: UIComponent): void {
        const index = this.children.indexOf(component);
        if (index !== -1) this.children.splice(index, 1);
    }
}

export class UIForm extends UIComponent {
    private children: UIComponent[] = [];

    constructor(name: string, initialPosition: Position) {
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

        console.log(`${indentation} ${this.getName()} Form "${this.getName()}" at (${x}, ${y})`);

        this.children.forEach((component) => {
            component.show(); // Show child components recursively
        });
    }

    add(component: UIComponent): void {
        component.setParent(this);
        this.children.push(component);
    }

    remove(component: UIComponent): void {
        const index = this.children.indexOf(component);
        if (index !== -1) this.children.splice(index, 1);
    }
}
