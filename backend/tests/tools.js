exports.get400RegistrationData = (index) => {
	if(index >= registration_400_data.length) {
		return registration_400_data[0];
	} else if (index < 0) {
		return registration_400_data;
	} else {
		return registration_400_data[index];
	}
}

exports.get200RegistrationData = (index) => {
	if(index >= registration_200_data.length) {
		return registration_200_data[0];
	} else if (index < 0) {
		return registration_200_data;
	} else {
		return registration_200_data[index];
	}
}

exports.get400LoginData = (index) => {
	if(index >= login_400_data.length) {
		return login_400_data[0];
	} else if (index < 0) {
		return login_400_data;
	} else {
		return login_400_data[index];
	}
}

exports.get200LoginData = (index) => {
	if(index >= login_200_data.length) {
		return login_200_data[0];
	} else if (index < 0) {
		return login_200_data;
	} else {
		return login_200_data[index];
	}
}

exports.get400RequestResetData = (index) => {
	if(index >= requestreset_400_data.length) {
		return requestreset_400_data[0];
	} else if (index < 0) {
		return requestreset_400_data;
	} else {
		return requestreset_400_data[index];
	}
}

exports.get200RequestResetData = (index) => {
	if(index >= requestreset_200_data.length) {
		return requestreset_200_data[0];
	} else if (index < 0) {
		return requestreset_200_data;
	} else {
		return requestreset_200_data[index];
	}
}

exports.getUserDataProperty = (index, property) => {
	if(index < 0 || index >= user_data.length) {
		return user_data[0].property;
	} else {
		return user_data[index][property];
	}
}

randomString = (length) => {
	let text = "";
	const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for (let i = 0; i < length; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));

	return text;
}

// Base user data
user_data = [
	{
		email: "jane@someemailserver.com",
		firstName: "Jane",
		lastName: "Doe", 
		password: "foobar",
		password_confirm: "foobar",
		roles:["member", "admin"], 
		demographics: {
			name: "Jane Doe", 
			gender:" female"
		},
	},
	{
		email: "john@gmail.com",  
		firstName: "John",
		lastName: "Doe", 
		password: "barfoo",
		password_confirm: "barfoo",
		roles:["member"], 
		demographics: {
			name: "John Doe", 
			gender:" male"
		},
	},
	{
		email: "joe@compuserve.com",
		firstName: "Jane",
		lastName: "Schmoe", 
		password: "foobar",
		password_confirm: "foobar",
		roles:["member", "admin"], 
		demographics: {
			name: "Joe Schmoe", 
			gender:" male"
		},
	},
];

registration_400_data = [
	// Missing password_confirm
	JSON.stringify((({email, firstName, lastName, password, roles, demographics}) => 
		({email, firstName, lastName, password, roles, demographics}))(user_data[0])),
	// Missing email and password_confirm
	JSON.stringify((({firstName, lastName, password, roles, demographics}) => 
		({firstName, lastName, password, roles, demographics}))(user_data[1])),
];

registration_200_data = [
	JSON.stringify(user_data[0]),
	JSON.stringify(user_data[1]),
	JSON.stringify(user_data[2]),
];

login_400_data = [
	// Missing password
	JSON.stringify({
		email: user_data[0].email,
	}),
	// Missing email
	JSON.stringify({
		password: user_data[0].password,
	}),
	// Invalid email
	JSON.stringify({
		email: "wrongemail",
		password: user_data[0].password,
	}),
	// Valid email, wrong password
	JSON.stringify({
		email: user_data[0].email,
		password: "wrongpassword",
	})

];

login_200_data = [
	JSON.stringify({
		email: user_data[0].email,
		password: user_data[0].password,
	}),
	JSON.stringify({
		email: user_data[1].email,
		password: user_data[1].password,
	}),
	JSON.stringify({
		email: user_data[2].email,
		password: user_data[2].password,
	}),
];

requestreset_400_data = [
	JSON.stringify({
		email: "wrongemail",
	}),
];

requestreset_200_data = [
	JSON.stringify({
		email: user_data[0].email,
	}),
	JSON.stringify({
		password: "anewpassword",
		password_confirm: "anewpassword",
	}),
];

exports.service = require("../start");
