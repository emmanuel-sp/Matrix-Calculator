const router = require('express').Router();

router.get('/', (req, res) => {
    res.json("this is an example");
});

router.post('/add', (req, res) => {
    try {
        const num1 = parseInt(req.body.num1);
        const num2 = parseInt(req.body.num2);
        const added = num1 + num2;
    
        console.log("Body: ", req.body);
    
        console.log("Num1: " + num1);
        console.log("Num2: " + num2);
        console.log("Added: " + added);
    
        res.json(added);
    } catch (e) {
        console.error(e);
        res.status(500).json("no worky")
    }
});

router.post('/subtract', (req, res) => {
   try {
        const num1 = req.body.num1;
        const num2 = req.body.num2;
        const subtracted = num1 - num2;

        console.log("Body: ", req.body);

        console.log("Num1: " + num1);
        console.log("Num2: " + num2);
        console.log("Subtracted: " + subtracted);

        res.json(subtracted);
    } catch (e) {
        console.error(e);
        res.status(500).json("no worky")
    }
});

router.post('/multiply', (req, res) => {
    try {
        const num1 = req.body.num1;
        const num2 = req.body.num2;
        const multiplied = num1 * num2;

        console.log("Body: ", req.body);

        console.log("Num1: " + num1);
        console.log("Num2: " + num2);
        console.log("Multiplied: " + multiplied);

        res.json(multiplied);
    } catch (e) {
        console.error(e);
        res.status(500).json("no worky")
    }
});

router.post('/divide', (req, res) => {
    try {
        const num1 = req.body.num1;
        const num2 = req.body.num2;
        const divided = num1 / num2;

        console.log("Body: ", req.body);

        console.log("Num1: " + num1);
        console.log("Num2: " + num2);
        console.log("Divided: " + divided);

        res.json(divided);
    } catch (e) {
        console.error(e);
        res.status(500).json("no worky")
    }
});

module.exports = router;