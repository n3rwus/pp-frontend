import { Description } from '@mui/icons-material';
import axios from 'axios';

axios.defaults.withCredentials = true;

export interface NewAdvert {
	jwtToken: string;
	title: string;
	description: string;
	price: number;
	email?: string;
	phoneNumber?: string;
	category?: number;
	area?: number;
	image?: string;
}

export interface iSimplyAdvert {
	advertId?: number;
	image?: string;
	title?: string;
	price?: string;
}
export class AdvertDataProvider {

	public static addAdvert(data: NewAdvert) {
		let status = 0;
		console.log(data);
		return axios.post(`http://localhost:4000/adverts/create`, {
			Title: data.title,
			Description: data.description,
			Price: data.price,
			Mail: data.email,
			PhoneNumber: data.phoneNumber,
			Image: data.image,
			Category: data.category,
			Area: data.area
		}, {
			headers: {
				'Authorization': 'Bearer ' + data.jwtToken,
				'Accept' : 'application/json',
				'Content-Type': 'application/json'
			}
		}).then(res => {
			console.log(res);
			console.log(res.data);
			status = res.status;
			return status;
		}).catch(error => {
			if (error.response) {
				console.log(error.response!.status);
				status = error.response!.status;
			}
			return status;
		});
	}

	public static getUserAdverts(jwtToken: string, id: string) {
		let status = 0;
		return axios.get(`http://localhost:4000/adverts/user/` + id, {
			headers: {
				'Authorization': 'Bearer ' + jwtToken,
				'Accept' : 'application/json',
				'Content-Type': 'application/json'
			}
		}).then(res => {
			const formattedSimplyAdverts: iSimplyAdvert[] = [];
			res.data.$values.forEach((advert: { id: any; image: any; title: any; price: any; }) => {
				const simplyAdvert: iSimplyAdvert = {
					advertId: advert.id,
					image: advert.image,
					title: advert.title,
					price: advert.price,
				}
				formattedSimplyAdverts.push(simplyAdvert);
			})
			return formattedSimplyAdverts;
		}).catch(error => {
			if (error.response) {
				console.log(error.response!.status);
				status = error.response!.status;
			}
			return status;
		});
	}
}