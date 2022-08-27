const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
router.use('/users', userRoutes);
router.use('/posts', postRoutes);


module.exports = router;


// While this is a small file, we're keeping the API endpoints nice and organized while allowing the API to be scalable. 
// At some point, we'll add more API endpoints and use this file to collect them and give them their prefixed name.