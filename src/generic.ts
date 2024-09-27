type Constructor = new (...args: any[]) => {}
type GConctructor<T = {}> = new (...args: any[]) => T

class List {
    constructor(public items: string[]) {}
}

type ListItems = GConctructor<List>

// class ExtendedListItem extends List {
//     first() {
//         return this.items[0]
//     }
// }

function ExtendList<TBase extends ListItems>(Base: TBase) {
    return class ExtendList extends Base {
        // first() {
        //     return this.items[0]
        // }
    }
}
