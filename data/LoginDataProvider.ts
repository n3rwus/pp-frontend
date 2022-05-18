import axios from 'axios';

export class LoginDataProvider {

	public static singIn(email: string, password: string) {
		let data = '';
		return axios.post(`http://localhost:5000/api/User/login`, {
			email: email,
			password: password,
		}, {
			headers: {
				'Accept' : 'application/json',
				'Content-Type': 'application/json'
			}
		}).then(res => {
			console.log(res);
			console.log(res.data);
			data = res.data.access_token;
			return data;
		}).catch(er => {
			console.log(er);
			return data;
		});
	}
}