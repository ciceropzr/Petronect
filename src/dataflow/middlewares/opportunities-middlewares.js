import axios from 'axios';

const API_URL = 'https://premium.petronextlab.io/petronect-app-core-api';

export const getAllOpportunitesMiddleware = (info) => axios({
	url: `${API_URL}/opportunities/search`,
	method: 'post',
	headers: {
		Authorization: info.accessToken,
	},
	data: info.keywords,
});

export const getOpportunityById = (info) => axios({
	url: `${API_URL}/opportunities/${info.opportunityId}/`,
	method: 'get',
	headers: {
		Authorization: `Bearer ${info.accessToken}`,
	},
});

export const postKeywordMiddleware = (userId, accessToken, info) => axios({
	url: `${API_URL}/users/${userId}/keyword-filter`,
	method: 'post',
	headers: {
		Authorization: accessToken,
	},
	data: info,
});

export const getAllKeywordMiddleware = (userId, accessToken) => axios({
	url: `${API_URL}/users/${userId}/keyword-filter`,
	method: 'get',
	headers: {
		Authorization: accessToken,
	},
});

export const deleteNotificationMiddleware = (info) => axios({
	url: `${API_URL}/users/${info.userId}/keyword-filter/${info.filterId}`,
	method: 'delete',
	headers: {
		Authorization: info.accessToken,
	},
});
