'use strict';


var datasource = require('./../../datasource').getDataSource();
var Discussion = datasource.Discussion;

//var Message = datasource.Message;
var controllerHelper = require('./../../lib/controllerHelper');


// build controller for discussion resource
var discussionController = controllerHelper.buildController(Discussion, null, {filtering: true});

/**
 * Get the discussion with specified id.
 * @param req the request
 * @param res the response
 * @param next the next middleware in the route
 */
function getDiscussion(req, res, next) {
  controllerHelper.getEntity(Discussion, null, {filtering: true}, req, function(err, entity) {
    if (!err) {
      entity.messages = ['a', 'b'];
      req.data = {
        success: true,
        status: 200,
        content: entity
      };
    }
    next();
  });
}

module.exports = {
  create: discussionController.create,
  getDiscussions: discussionController.all,
  findById: getDiscussion

};
