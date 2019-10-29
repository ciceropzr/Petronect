import axios from 'axios';

const API_URL = 'https://premium.petronextlab.io/petronect-app-core-api';

// eslint-disable-next-line import/prefer-default-export
export const loginUserMiddleware = (info) => axios({
	url: `${API_URL}/login`,
	method: 'post',
	header: {
		'Content-Type': 'application/json',
	},
	data: {
		email: info.email,
		password: info.password,
	},
});

export const createAccountMiddleware = (info) => axios({
	url: `${API_URL}/sign-up`,
	method: 'post',
	header: {
		'Content-Type': 'application/json',
	},
	data: {
		email: info.email,
		name: info.name,
		password: info.password,
	},
});

export const sendRecoverPasswordMiddleware = (info) => axios({
	url: `${API_URL}/password-reset-request`,
	method: 'post',
	header: {
		'Content-Type': 'application/json',
	},
	data: {
		email: info,
	},
});

export const verifyEmailExistingMiddleware = (info) => axios({
	url: `${API_URL}/email-exists?email=${info}`,
	method: 'get',
});
