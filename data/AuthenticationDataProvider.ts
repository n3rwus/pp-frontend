import axios from 'axios';

interface LoginDataResponse {
	id: string;
	jwtToken: string;
	error: any;
}

export class AuthenticationDataProvider {

	public static register(email: string, password: string, firstName: string, lastName: string, username: string) {
		let data = 0;
		return axios.post(`http://localhost:4000/users/register`, {
			Email: email,
			Password: password,
			FirstName: firstName,
			LastName: lastName,
			Username: username,
		}).then(res => {
			console.log(res);
			console.log(res.data);
			data = res.status;
			return data;
		}).catch(error => {
			if (error.response) {
				console.log(error.response!.status);
				data = error.response!.status;
			}
			return data;
		});
	}

	public static singIn(username: string, password: string): Promise<LoginDataResponse> {
		let data: LoginDataResponse = {
			jwtToken: '',
			id: '',
			error: 0,
		}

		return axios.post(`http://localhost:4000/users/authenticate`, {
			Username: username,
			Password: password,
		}, {
			headers: {
				'Accept' : 'application/json',
				'Content-Type': 'application/json'
			}
		}).then(res => {
			data.jwtToken = res.data.jwtToken;
			data.id = res.data.id;
			console.log(res.headers);
			data.error = 0;
			return data;
		}).catch(error => {
			if (error.response) {
				console.log(error.response!.status);

				data.error = error.response!.status;
			}
			return data;
		});
	}
}
