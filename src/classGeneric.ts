class Resp<D, E> {
    data?: D
    error?: E

    constructor(data?: D, error?: E) {
        if (data) {
            return (this.data = data)
        }
        if (error) {
            return (this.error = error)
        }
    }
}
const res = new Resp<string, number>("data")

class HTTPResponse<F> extends Resp<string, number> {
    code: F

    setCode(code: F) {
        this.code = code
    }
}

const res2 = new HTTPResponse()
