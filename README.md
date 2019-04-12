# Auth-A-Rama Centra.

A stand-alone authorization API created with Node, Express, Mongoose, MondoDB, JWT, and React

# Installation & Configuration

Steps to install all the dependencies and bring this api up using docker

## Install Dependencies

1. Install all the npm dependencies by running npm install in the `/api` and `/frontend` directories

## Configs

1. in the root of `/api` a file named `variables.env` should be created. there is a `variables.env.sample` file. Below is an example of a working config for this file. Create a `variables.env` file in `/api`

```
NODE_ENV=development
JWT_ALGORITHM="HS256"
SALT=10
FRONTEND_URL="http://localhost:7777"
MAIL_HOST="smtp.mailtrap.io"
MAIL_PORT=2525
MAIL_USER="9963aac7b160ba"
MAIL_PASS="60033e21efa7b3"

```

## Running the Microservice

1. ensure all of the installation steps were completed
2. from `/docker/aarc_dev` run `docker-compose build`
3. after build runs, run `docker-compose up`

# Token validation

## Create a user

Users may be created using the API directly:

```
curl --header "Content-Type: application/json" --request POST --data '{"email": "someuser@myfakeemail.com", "firstName": "Some", "lastName": "User", "password":"foobar", "password_confirm":"foobar", "roles":["member"], "demographics":{"name":"Some User", "gender":"male"}}' http://stage.paladinarcher.com:8888/api/v1/register
```

Alternatively, registration can be done by using the GUI at `http://stage.developerlevel.com:8000/#/register`

## Obtain a token

Tokens must be obtained by using the `/login` endpoint. The authentication token is returned by a successful login attempt. This can be accomplished via API, as shown in the following example. Note, if the login is successful, the token is returned in the JSON response from the API:

```
$ curl --header "Content-Type: application/json" --request POST --data '{"email": "someuser@myfakeemail.com", "password": "foobar"}' http://stage.paladinarcher.com:8888/api/v1/login

{"status":200,"message":"Success","data":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1YzNmZjE1Y2JlMDMzNzAwMGZiNGNlMzIiLCJ0b2tlblRpbWVvdXQiOjE1ODEwMzc0MzU4NDcsImlhdCI6MTU0OTUwMTQzNSwiZXhwIjozMTMwNTM4ODcwfQ.V0kKCpCJ7gLsq6TEyMbN54U8WnUHwyuTiEvTckCPfPs"}

```

Alternatively, a login can be done by using the GUI at `http://stage.developerlevel.com:8000/`. When using the GUI, the token is stored in Local Storage, which can be viewed in the browser's developer tools. It is stored in a property called `aarcToken`. Note, local storage properties and values are only accessible to pages originating from the same domain and port, which in this example are `stage.paladinarcher.com` and `8888` respectively.

## Token validation

To validate a token, the API can be used as shown in the following example.

```
curl --header "Content-Type: application/json" --request GET --data '{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1YzNmZjE1Y2JlMDMzNzAwMGZiNGNlMzIiLCJ0b2tlblRpbWVvdXQiOjE1ODEwNDI5NjcxNTgsImlhdCI6MTU0OTUwNjk2NywiZXhwIjozMTMwNTQ5OTM0fQ.1nwPqTtLGKbcpZJICNnNa5yCVLCTsMHSvyHI7TW5bqI"}' http://stage.paladinarcher.com:8888/api/v1/user/someuser@myfakeemail.com

```

If the validation is successful, the following JSON will be returned:

```

{"status":200,"message":"Success","data":{"name":"Some User","gender":"male","email":"someuser@myfakeemail.com"}}

```

If the validation is unsuccessful, the following JSON responses are possible:

```

{"status":400,"message":"Token verification failed"}

```

```

{"message":"Page not found","status":404}

```
