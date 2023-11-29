export class ExpenseRequest {
    constructor(public amount: number, public purpose: string) {
        console.log("New expense created");
    }
}
