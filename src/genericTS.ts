function logMiddleware<T>(data: T): T {
    console.log(data)
    return data
}

const res = logMiddleware<number>(12)
