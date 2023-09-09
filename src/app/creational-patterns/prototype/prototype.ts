// Prototype: Define the Prototype interface for UI components
export interface UIComponent {
    name: string;
    width: number;
    height: number;
    clone(): UIComponent;
    render(): void;
}


