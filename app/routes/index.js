const { Router } = require('express');
const cors = require('cors');

const apiRoutes = require('./api');

const router = Router();

router.get('/', (req, res) => res.send(`${process.env.APP_NAME} is up & running`));
router.get('/dare', (req, res) => res.send('welcome to dare app'));

router.use('/api', cors(), apiRoutes);



module.exports = router;
