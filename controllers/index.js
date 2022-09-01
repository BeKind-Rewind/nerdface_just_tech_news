const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);
// // adding prefix /api/ 
router.use('/api', apiRoutes);


// To ensure a bogus endpoint gets a 404 response
router.use((req, res) => {
    res.status(404).end();
});


module.exports = router;