import { Text } from "./component";

/* Decorator: Maintains a reference to a Component object (text) 
   and defines an interface that adheres to the Component's interface. (Text) */
export abstract class TextDecorator implements Text {
    constructor(protected text: Text) { }

    abstract format(): string;
}
