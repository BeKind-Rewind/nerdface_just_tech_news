const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;


// While this is a small file, we're keeping the API endpoints nice and organized while allowing the API to be scalable. 
// At some point, we'll add more API endpoints and use this file to collect them and give them their prefixed name.