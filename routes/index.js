const router = require("express").Router();

const html = require('./htmlRoutes');
const api = require('./api/apiRoutes');

router.use(html)
router.use("/api", api)

module.exports = router;