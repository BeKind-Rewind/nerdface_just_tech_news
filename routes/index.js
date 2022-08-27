const router = require('express').Router();
const apiRoutes = require('./api');

// // adding prefix /api/ 
router.use('/api', apiRoutes);


// To ensure a bogus endpoint gets a 404 response
router.use((req, res) => {
    res.status(404).end();
});


module.exports = router;