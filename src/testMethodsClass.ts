enum StatusPayment {
    Holded,
    Processed,
    Reverse,
}

class Payment {
    id: number
    status: StatusPayment
    createdAt: Date
    updateAt?: Date

    constructor(id: number) {
        this.id = id
        this.status = StatusPayment.Holded
        this.createdAt = new Date()
    }

    getPaymentLifeTime() {
        return new Date().getTime() - this.createdAt.getTime()
    }

    unHoldPayment() {
        if (this.status === StatusPayment.Holded) {
            throw new Error("Nema groshey")
        }
        this.status = StatusPayment.Reverse
        this.updateAt = new Date()
    }
}

const payment = new Payment(1)
// payment.unHoldPayment()
console.log(payment)
const transactionLifeTime = payment.getPaymentLifeTime()
console.log(transactionLifeTime)
