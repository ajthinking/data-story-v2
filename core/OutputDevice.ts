import { LinkId } from "./Link"
import { Item } from "./Item"
import { PortId } from "./Port"

type LinkItems = Record<LinkId, Item[]>

export type OutputTree = Record<PortId, LinkItems>

export interface OutputDeviceInterface {
  push(items: Item[]): void
  pushTo(name: string, items: Item[]): void
  itemsAt?(name: string): Item[]
}

export class OutputDevice implements OutputDeviceInterface {
  constructor(
    private outputTree: OutputTree = {},
    private linkCounts: Map<LinkId, number>,
  ) {}

  push(items: Item[]) {
    return this.pushTo('output', items)
  }

  pushTo(name: string, items: Item[]) {
    const connectedLinks = this.outputTree[name]
    const outgoingItemLists = Object.values(connectedLinks)

    // Update items on link
    for(const itemList of outgoingItemLists) {
      itemList.push(...items)
    }

    // Update link counts
    for(const linkId of Object.keys(connectedLinks)) {
      const count = this.linkCounts.get(linkId)!
      this.linkCounts.set(linkId, count + items.length)
    }
  }

  itemsOutputtedThrough(name: string): Item[] {
    const connectedLinks = this.outputTree[name]
    const [firstLinkItems] = Object.values(connectedLinks)

    return firstLinkItems
  }
}