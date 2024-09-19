function logMiddleware<T>(data: T): T {
    console.log(data)
    return data
}

const res = logMiddleware<number>(12)

function getHalf<T>(data: Array<T>): Array<T> {
    const t = data.length / 2
    return data.splice(-2, t)
}

console.log(getHalf<number>([1, 2, 3, 4, 5, 4, 33]))

const split: <T>(data: Array<T>) => Array<T> = getHalf

interface ILogLine<T> {
    date: Date
    data: T
}

const logLine: ILogLine<{ b: number; c: number }> = {
    date: new Date(),
    data: {
        b: 1,
        c: 3,
    },
}
