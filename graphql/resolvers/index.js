const userResolver = require('./user');
const videoResolver = require('./video');
const commentResolver = require('./comment');

const rootResolver = {
  ...userResolver,
  ...videoResolver,
  ...commentResolver
} 

module.exports = rootResolver;