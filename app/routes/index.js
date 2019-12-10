const { Router } = require('express');
const cors = require('cors');

const apiRoutes = require('./api');

const router = Router();

router.get('/', (req, res) => res.send(`${process.env.APP_NAME} is up & running`));

router.use('/api', cors(), apiRoutes);

module.exports = router;
