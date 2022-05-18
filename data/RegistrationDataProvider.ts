import axios from 'axios';

export class RegistrationDataProvider {

	public static registerUser(email: string, password: string) {
		let data = 0;
		return axios.post(`http://localhost:44372/api/User/register`, {
			email: email,
			password: password,
		}).then(res => {
			console.log(res);
			console.log(res.data);
			data = res.status;
			return data;
		}).catch(er => {
			console.log(er);
			return data;
		});
	}
}