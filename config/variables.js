require('dotenv').config();

const variablesEnv = {
	port: process.env.PORT,
	mongodb_uri: process.env.MONGODB_URI,
	access_token_secret: process.env.ACCESS_TOKEN_SECRET,
	access_token_life: process.env.ACCESS_TOKEN_LIFE,
	refresh_token_secret: process.env.REFRESH_TOKEN_SECRET,
	refresh_token_life: process.env.REFRESH_TOKEN_LIFE,
}

module.exports = variablesEnv