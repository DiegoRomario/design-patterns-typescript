import { UIComponent } from './prototype';

// Concrete Prototype A: TextBox class with additional properties and ability to clone itself
export class TextBox implements UIComponent {
    name: string;
    width: number;
    height: number;

    constructor(
        source: Pick<UIComponent, 'name' | 'width' | 'height'>,
        public readonly: boolean
    ) {
        this.name = source.name,
            this.width = source.width,
            this.height = source.height;
    }

    public clone(): UIComponent {
        return new TextBox(this, this.readonly);
    }

    public render(): void {
        console.log(
            `TextBox: Name='${this.name}', Width='${this.width}', Height='${this.height}', Readonly='${this.readonly}'`
        );
    }
}

// Concrete Prototype B: Button class with additional properties and ability to clone itself 
export class Button implements UIComponent {
    name: string;
    width: number;
    height: number;

    constructor(
        source: Pick<UIComponent, 'name' | 'width' | 'height'>,
        public action: () => void,
        public enabled: boolean
    ) {
        this.name = source.name;
        this.width = source.width;
        this.height = source.height;
    }

    public clone(): UIComponent {
        return new Button(this, this.action, this.enabled);
    }

    public render(): void {
        console.log(
            `Button: Name='${this.name}', Width='${this.width}', Height='${this.height}', Enabled='${this.enabled}'`
        );
    }
}
