const router = require('express').Router();

router.get('/', (res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

module.exports = router;