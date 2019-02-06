/*
 * Root level api
 */
global.subscribers = [];

exports.index = async (req, res) => {
	const status = 200;

	const response = [{
		id: 0,
		status,
		message: "Success",
		data = {
			name: res.locals.globals.siteName, 
			version: res.locals.globals.siteVersion,
			now: res.locals.globals.moment().format('MMMM Do YYYY, h:mm:ss a'),
		}
	}];

	return res.status(status).json(response);
}

exports.subscribe = async (req, res) => {
	console.log(req.data);

	return res.status(200).json([{
		id: 0,
		message: "Subscription worked"
	}]);
}

exports.createEvent = async (req, res) => {
	console.log("createEvent called");
}