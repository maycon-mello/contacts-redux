module.exports = function (app) {
	
  var controller = app.controllers.contact

  app.route('/contacts')
  	.get(controller.list)
  	.post(controller.save)

  app.route('/contacts/:id')
	.get(controller.getById)
	.delete(controller.remove)
};