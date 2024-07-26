type PaymentStatusOfExtendet = "new" | "paided"

class PaymentDecloration {
    id: number
    status: PaymentStatusOfExtendet = "paided"

    constructor(id: number) {
        this.id = id
    }

    willPay() {
        this.status = "new"
    }
}

class PaidedBill extends PaymentDecloration {
    constructor() {
        const id = Math.random()
        super(id)
    }
}
