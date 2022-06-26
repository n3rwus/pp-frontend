import axios from 'axios';
import { iSimplyAdvert } from './AdvertDataProvider';

axios.defaults.withCredentials = true;

export interface iProfile {
	id?: string;
	firstName?: string;
	lastName?: string;
	username?: string;
	adverts?: iSimplyAdvert[];
}
	
export class ProfileDataProvider {
	public static getUserProfile(id: string) {
		let status = '';
		return axios.get(`http://localhost:4000/users/` + id).then(res => {
			console.log(res);
			console.log(res.data);
			const profile: iProfile = {};
			const data = res.data;
			profile.id = data.id;
			profile.firstName = data.firstName;
			profile.lastName = data.lastName;
			profile.username = data.username;
			
			const formattedSimplyAdverts: iSimplyAdvert[] = [];
			data.advertsOwned.$values.forEach((advert: { id: any; image: any; title: any; price: any; }) => {
				const simplyAdvert: iSimplyAdvert = {
					advertId: advert.id,
					image: advert.image,
					title: advert.title,
					price: advert.price,
				}
				formattedSimplyAdverts.push(simplyAdvert);
			})
			profile.adverts = formattedSimplyAdverts;
			return profile;
		}).catch(error => {
			if (error.response) {
				console.log(error.response!.status);
				status = error.response!.status;
			}
			return status;
		});
	}
}