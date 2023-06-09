import { ExecutionUpdate } from "./ExecutionUpdate";
import { Item } from "./Item";
import { LinkId } from "./Link";

export class ExecutionResult {
  type = "executionResult"

  constructor(
    public id: string,
  ) {}

  stringify() {    
    return JSON.stringify(this)
  }
}