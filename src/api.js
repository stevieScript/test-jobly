import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
	// the token for interactive with the API will be stored here.
	static token;

	static async request(endpoint, data = {}, method = 'get') {
		console.debug('API Call:', endpoint, data, method);

		//there are multiple ways to pass an authorization token, this is how you pass it in the header.
		//this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
		const url = `${BASE_URL}/${endpoint}`;
		const headers = {Authorization: `Bearer ${JoblyApi.token}`};
		const params = method === 'get' ? data : {};

		try {
			return (await axios({url, method, data, params, headers})).data;
		} catch (err) {
			console.error('API Error:', err.response);
			let message = err.response.data.error.message;
			throw Array.isArray(message) ? message : [message];
		}
	}

	// Individual API routes

	/** Get details on a company by handle. */

	static async getCompany(handle) {
		let res = await this.request(`companies/${handle}`);
		return res.company;
	}

	// obviously, you'll add a lot here ...
	static async getCompanies(name) {
		let res = await this.request('companies', {name});
		return res.companies;
	}

	static async getAllCompanies() {
		let res = await this.request('companies');
		return res.companies;
	}

	static async getJobs(title) {
		let res = await this.request('jobs', {title});
		return res.jobs;
	}

	static async login(data) {
		let res = await this.request('auth/token', data, 'post');
		return res.token;
	}

	static async register(data) {
		let res = await this.request('auth/register', data, 'post');
		return res.token;
	}

	static async getUser(username) {
		let res = await this.request(`users/${username}`);
		return res.user;
	}

	static async getCurrentUser(token) {
		let res = await this.request(`users`, token);
		return res.user;
	}

	static async updateUser(username, data) {
		let res = await this.request(`users/${username}`, data, 'patch');
		return res.user;
	}

	static async applyToJob(username, id) {
		let res = await this.request(`users/${username}/jobs/${id}`, {}, 'post');
		return res.message;
	}
}

// for now, put token ("testuser" / "password" on class)

export default JoblyApi;

