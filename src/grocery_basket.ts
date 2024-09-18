class Commodity {
    constructor(
        public id: number,
        private title: string,
        public price: number
    ) {}
}

class Delivery {
    constructor(public date: Date) {}
}

class HomeDelivery extends Delivery {
    constructor(date: Date, public address: string) {
        super(new Date())
    }
}

type DeliveryOption = Delivery | HomeDelivery

class Cart {
    public product: Commodity[] = []
    public delivery: DeliveryOption

    public addProduct(product: Commodity) {
        this.product.push(product)
    }

    public deleteProductById(idProduct: number): void {
        this.product = this.product.filter((p: Commodity) => p.id !== idProduct)
    }

    public getSum(): number {
        return this.product
            .map((p: Commodity) => p.price)
            .reduce((p1: number, p2: number) => p1 + p2)
    }

    public setDelivery(delivery: DeliveryOption) {
        this.delivery = delivery
    }

    public chekcOut() {
        if (this.product.length === 0) {
            throw new Error("Don`t have any product")
        }
        if (!this.delivery) {
            throw new Error("Don`t have any product")
        }
        return { success: true }
    }
}

const cart = new Cart()

cart.addProduct(new Commodity(1, "Orange", 30))
cart.addProduct(new Commodity(2, "Apple", 25))
cart.addProduct(new Commodity(3, "Sandvich", 45))

cart.getSum()

cart.deleteProductById(2)

// cart.setDelivery(new HomeDelivery(new Date(), ""))

console.log(cart.chekcOut())
console.log(cart.getSum())
