class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    display() {
        setTimeout(() => {
            console.log(this.name + " : " + this.email);
        }, 3000);
    }
}
let c = new Customer('James', 'bond@msn.com');
c.display();
