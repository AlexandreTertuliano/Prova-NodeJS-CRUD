var bills = []


const newBiils = (req, res) => {
    var body = req.body;

    if (body.amount) res.status(405)
    if (body.produtc) res.status(405)
    if (body.paymentMethod) res.status(405)
    if (body.customer) res.status(405)

    var data = {
        'id': Math.random().toString(10),
        'amount': body.amount,
        'produtc': body.produtc,
        'paymentMethod': body.paymentMethod,
        'customer': body.customer,
    }
    bills.push(data)
    res.json({ message: "Bill adicionado com sucesso", bill: data }, 200)

}

const getBills = (req, res) => {
    var customerC = req.query.customer
    var returnData = [];
    for (let i = 0; i < bills.length; i++) {
        if (customerC == bills[i].customer) {
            returnData.push(bills[i])
        }
    }
    if (returnData == "") res.json({ message: "Bill não encontrada" }, 401)
    else res.json({ result: returnData }, 200)
}



const deleteBill = (req, res) => {
    var id = `${req.params.id}`;
    let valid = false;
    for (let i = 0; i < bills.length; i++) {
        console.log(bills[i].id)
        console.log(id)
        if (id == bills[i].id) {
            bills.splice(i, 1);
            valid = true;
        }
    }

    if (!valid) res.json({ message: "Bill não encontrada" }, 404)
    else res.json({}, 200)
}

module.exports = {
    deleteBill,
    getBills,
    newBiils,
}