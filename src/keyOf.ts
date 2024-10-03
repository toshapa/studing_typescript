// interface IUser {
//     name: string
//     age: number
// }
interface Data {
    group: number
    name: string
}

// type KeysOfUser = keyof IUser

// const user: IUser = {
//     name: "TONY",
//     age: 34,
// }

const data: Data[] = [
    { group: 1, name: "PIZDYK" },
    { group: 1, name: "HUILO" },
    { group: 2, name: "SHO" },
]

// const key: KeysOfUser = "name"

// function getValue<T, K extends keyof T>(obj: T, key: K) {
//     return obj[key]
// }

// const userName = getValue(user, "name")

interface IGroup<T> {
    [key: string]: T[]
}

type key = string | number | symbol

function group<T extends Record<key, any>>(
    array: T[],
    key: keyof T
): IGroup<T> {
    return array.reduce<IGroup<T>>((map: IGroup<T>, item) => {
        // console.log(map, item)
        const itemKey = item[key]
        let currentElement = map[itemKey]
        if (Array.isArray(currentElement)) {
            currentElement.push(item)
        } else {
            currentElement = [item]
        }
        map[itemKey] = currentElement
        return map
    }, {})
}

const resp = group<Data>(data, "group")
console.log(resp)
