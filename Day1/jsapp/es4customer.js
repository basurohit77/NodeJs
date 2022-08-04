function Customer(name, email) {
    this.name = name;
    this.email = email;
    this.display = function () {
        console.log(this.name + " : " + this.email);

    }
}

var c = new Customer('Jack', 'sparrow@gmail.com');
c.display();