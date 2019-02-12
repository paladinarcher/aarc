const axios = require('axios');

/*
 * Root level api
 */
global.subscribers = [];

exports.index = async (req, res) => {
	console.log("index AARC end point");

	const status = 200;

	const response = [{
		id: 0,
		status,
		message: "Success",
		data: {
			name: res.locals.globals.siteName, 
			version: res.locals.globals.siteVersion,
			now: res.locals.globals.moment().format('MMMM Do YYYY, h:mm:ss a'),
		}
	}];

	return res.status(status).json(response);
}

exports.subscribe = async (req, res) => {
	console.log("subscribe AARC end point");

	const url = req.body.url;

	global.subscribers.push(url);

	return res.status(200).json({
		message: "Success",
		url
	});
}

exports.unsubscribe = async (req, res) => {
	console.log("unsubscribe AARC end point");

	if (!req.query.hookId) return next();

	const hookId = req.query.hookId;

	if (hookId > -1) {
		global.subscribers.splice(hookId, 1);
	}

	return res.status(200).json({
		message: "Success",
		hookId
	});
}

exports.createAnEvent = async (req, res) => {
	console.log("createAnEvent AARC end point");
	console.log(globals.subscribers[0]);

	const response = await axios.post(globals.subscribers[0], {
		firstName: 'Fred',
		lastName: 'Flintstone'
	}).catch(function (error) {
		console.log(error);
	});

	console.log(response);

	res.status(200).json({message: "Success"});
}

exports.receiveData = async (req, res) => {
	console.log("recieveData AARC end point");

	// Echo back what is received
	return res.status(200).json(req.body.json);
}
