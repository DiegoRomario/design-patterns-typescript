import { UIButton } from "./leaf";
import { UITab, UIForm } from "./composites";

const btnSubmit = new UIButton("btnSubmit", { x: 10, y: 20 }, "Submit");
const btnCancel = new UIButton("btnCancel", { x: 30, y: 40 }, "Cancel");
const tabMain = new UITab("tabMain", { x: 50, y: 60 });
const form = new UIForm("formMain", { x: 5, y: 5 });

tabMain.add(btnSubmit);
tabMain.add(btnCancel);
form.add(tabMain);

// Move the Tab to a new position (X, Y)
tabMain.setPosition({ x: 70, y: 80 });

form.show();
/* Output:
- formMain Form "formMain" at (5, 5)
-- tabMain Tab "tabMain" at (70, 80)
--- btnSubmit Button "Submit" at (10, 20)
--- btnCancel Button "Cancel" at (30, 40) */