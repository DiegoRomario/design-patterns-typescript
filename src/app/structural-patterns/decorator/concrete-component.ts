import { Text } from "./component";

/* Concrete Component: the actual object that
   may have additional responsibilities attached. */
export class PlainText implements Text {
    constructor(private content: string) { }

    format(): string {
        return this.content;
    }
}
