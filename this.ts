class AnotherPayment {
    private date: Date = new Date()

    getDate() {
        return this.date
    }

    getArrowDate() {
        return this.date
    }
}

const newDate = new AnotherPayment()

const newUser1 = {
    id: 1,
    payment: newDate.getDate.bind(newDate),
}

class PaymentPersistant extends AnotherPayment {
    save() {
        return super.getDate()
    }
}

console.log(newDate.getDate())
console.log(newUser1.payment())
console.log(newDate.getArrowDate())
// console.log(new PaymentPersistant().getDate())
