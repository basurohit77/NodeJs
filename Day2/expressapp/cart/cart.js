function cartvg(req, res) {
    res.send('<h3>Shopping Vegetable Cart!!');
}

function cartap(req, res) {
    res.send('<h3>Shopping Apperals Cart!!');
}


module.exports.vg = cartvg;
module.exports.ap = cartap;
