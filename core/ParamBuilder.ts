import { Param } from "./Param"

export const string = (name: string) => new ParamBuilder(name, 'string')
export const number = (name: string) => new ParamBuilder(name, 'number')
export const json = (name: string) => new ParamBuilder(name, 'json')
export const select = (name: string) => new ParamBuilder(name, 'select')

export class ParamBuilder {
  selectOptions?: string[]

  constructor(private name: string, private type: string) {}

  value(value: any): ParamBuilder {
    this.value = value

    return this
  }

  options(options: string[]): ParamBuilder {
    this.selectOptions = options

    return this
  }

  get(): Param {
    return {
      id: this.name,
      name: this.name,
      type: this.type,
      value: this.value,
      selectOptions: this.selectOptions,
    }
  }
}