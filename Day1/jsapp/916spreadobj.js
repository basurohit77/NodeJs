let customer = {
    name: 'John',
    email: 'john@gmail.com',
};

let nxcust = { ...customer, cell: '1232321', email: 'john@msn.com' };

console.log(customer);
console.log(nxcust);

