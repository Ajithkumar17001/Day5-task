class uber {
    constructor(km) {
        this.km = km;
    }
    price() {
        return this.km * 6
    }

}
const user1 = new uber(5)
console.log(user1.price());

const user2 = new uber(10)
console.log(user2.price());