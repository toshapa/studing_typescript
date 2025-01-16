interface USER {
    name: string
    age?: number
    email: string
}

type partial = Partial<USER>
const p: partial = {}

type required = Required<USER>
type readonly = Readonly<USER>

type requiredAndReadonly = Required<Readonly<USER>>

interface PaymentPersistent {
    id: number
    sum: number
    from: string
    to: string
}

type Payment = Omit<PaymentPersistent, "sum">
type PaymentResistant = Pick<PaymentPersistent, "sum" | "to">

type ExtractEx = Extract<"from" | "to" | Payment, string>
type ExcludeEx = Exclude<"from" | "to" | Payment, string>

class User {
    constructor(public id: number, name: string) {}
}

function getData(id: number): User {
    return new User(id, "Jack")
}

type RT0 = ReturnType<typeof getData>
type RT1 = ReturnType<() => void>
type RT2 = ReturnType<<T>() => T>
type RT3 = ReturnType<<T extends string>() => T>
type PT = Parameters<typeof getData>[0]

type CP = ConstructorParameters<typeof User>

type IT = InstanceType<typeof User>
