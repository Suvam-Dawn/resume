const APIRequest = {
	request: async function (method, url, body) {
		let config = {
			method: method,
			jsonp: true,
			dataType: 'json',
		};
		if (body !== '') {
			config = { ...config, body };
		}
		return fetch(url, config)
			.then((response) => response.json())
			.then(this.returnResponse)
			.catch((response) => {
				return { code: 100, data: { responseCode: 0 } };
			});
	},
	returnResponse: async function (response) {
		return Promise.resolve(response);
	},
};
export default APIRequest;
