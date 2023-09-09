import { Button, TextBox } from "./concrete-prototypes";

// Client: creates a new object by asking a prototype to clone itself
export class Client {
    constructor() {
        const originalTextBox = new TextBox(
            { name: 'First Name', width: 200, height: 30 },
            false
        );
        const clonedTextBox = originalTextBox.clone();
        clonedTextBox.name = 'Last Name'

        const originalButton = new Button(
            { name: 'Submit', width: 100, height: 40 },
            () => console.log('Button clicked'),
            false
        );
        const clonedButton = originalButton.clone();
        clonedButton.name = "Cancel"

        originalTextBox.render();
        clonedTextBox.render();
        originalButton.render();
        clonedButton.render();
    }
}

