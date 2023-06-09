import { Item } from "../../../Item";
import { ComputerTester } from "../ComputerTester";
import { TestStep } from "../TestStep";

export const getsInput: TestStep = {
  async handle(tester: ComputerTester, itemsAtInputPort: Item[]) {
    const portName = 'input'
    const port = tester.node!.inputs.find((p: any) => p.name === portName)
    const link = tester.diagram!.linksConnectedToPortId(port!.id)[0]

    tester.inputDevice?.setItemsAt('input', link.id, itemsAtInputPort)
  }
}