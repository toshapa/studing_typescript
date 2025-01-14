type ReadOrwrite = "read" | "write"
type Bulk = "push" | "delete"

type Access = `can${Capitalize<ReadOrwrite>}${Capitalize<Bulk>}`

type SuccessOrError = "succes" | "error"

type ReadOrWriteBulk<T> = T extends `can${infer R}` ? R : never

type T = ReadOrWriteBulk<Access>

type ResponseT = {
    result: `get${Capitalize<SuccessOrError>}`
}

const a2: ResponseT = {
    result: "getSucces",
}
