import { TextDecorator } from "./decorator";

/* Concrete Decorator A: Add specific responsibilities (bold)
   to the components. */
export class BoldTextDecorator extends TextDecorator {
    format(): string {
        return `<b>${this.text.format()}</b>`;
    }
}

/* Concrete Decorator B: Add specific responsibilities (italic)
   to the components. */
export class ItalicTextDecorator extends TextDecorator {
    format(): string {
        return `<i>${this.text.format()}</i>`;
    }
}
